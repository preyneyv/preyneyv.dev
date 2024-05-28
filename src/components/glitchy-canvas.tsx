import { useEffect, useRef } from 'react'

async function loadImageData(path: string) {
  const img = new Image()
  img.src = path
  await new Promise((res, rej) => ((img.onload = res), (img.onerror = rej)))
  const canvas = new OffscreenCanvas(img.width, img.height)
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Unable to get 2D context from canvas')
  ctx.drawImage(img, 0, 0, img.width, img.height)
  return ctx.getImageData(0, 0, img.width, img.height, {
    colorSpace: 'srgb',
  })
}

function rand(max = 32768) {
  return Math.floor(Math.random() * max)
}

function paintGlitched(ctx: CanvasRenderingContext2D, image: ImageData) {
  const char = rand(32)
  const bit = rand(8)
  const width = rand(4) + 1
  const direction = rand(2) * 2 - 1
  const globalOffset = rand(3) - 1

  if (rand(3) === 0) {
    for (let i = 0; i < 128; i++) {
      const x = i & 0x1f // mod 32
      const y = i >> 5 // div 32

      let offset = globalOffset
      if (x >= char && x < char + width) {
        offset += bit * direction
      }
      ctx.putImageData(image, 0, offset, x, y * 8 + offset, 1, 8)
    }

    ctx.fillStyle = 'black'
    for (let i = 0; i < 12; i++) {
      ctx.fillRect(
        rand(image.width),
        rand(image.height),
        rand(image.width),
        rand(3)
      )
    }
  }
}

export default function GlitchCanvas({
  layer: desiredLayer,
}: {
  layer?: number
}) {
  const w = 32
  const h = 32
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    if (!ref.current) return
    const { current: canvas } = ref
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('Unable to get 2D context from canvas')

    let animFrame: any = undefined
    let isCancelled = false
    Promise.all(
      [
        '/layers/1.png',
        '/layers/2.png',
        '/layers/3.png',
        '/layers/4.png',
        '/layers/5.png',
      ].map(loadImageData)
    ).then((layers) => {
      if (isCancelled) return
      let layer = desiredLayer ?? 0
      const thing = () => {
        // pick a random layer if no layer is specified
        if (desiredLayer === undefined)
          if (rand(64) === 0) layer = rand(layers.length)
        paintGlitched(ctx, layers[layer])
        animFrame = setTimeout(thing, 30)
      }
      thing()
    })
    return () => {
      isCancelled = true
      clearTimeout(animFrame)
    }
  }, [ref, w, h, desiredLayer])
  return (
    <canvas
      width={w}
      height={h}
      ref={ref}
      className="h-auto w-full"
      style={{
        imageRendering: 'pixelated',
      }}
    />
  )
}

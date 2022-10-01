/* eslint-disable no-unused-expressions */
import { createCanvas, loadImage, registerFont } from 'canvas'
import { Stream } from 'stream'
import path from 'path'

export async function genshinAchievement(text: string): Promise<Stream | never> {
  registerFont(path.join(__dirname, "..", 'assets', 'zh-cn.ttf'), { family: 'genshin' })
  const myimg = await loadImage(path.join(__dirname, "..", 'assets', 'row-2-column-1.png'))
  let s: string = text.trim()
  s = `"${s}"`

  if (s.trim() == "" || s.trim().length > 50) throw new Error("Length must be less than 50 characters and not empty")

  const canvas = createCanvas(719, 270)
  const ctx = canvas.getContext('2d')
  ctx.drawImage(myimg, 0, 0, 719, 270)

  // opts
  let fontSize = 28
  let maxWidth = 500
  let [x, y] = [220, 180]
  let lineHeight = 35

  ctx.font = `${fontSize}px genshin`
  ctx.fillStyle = '#8c7d6f'

  if (ctx.measureText(s).width > maxWidth) {
    ctx.fillText(s.substring(0, 25), x, y - lineHeight)
    ctx.fillText(s.substring(25, s.length), x, y)
  } else ctx.fillText(s, x, y - lineHeight)

  return canvas.createPNGStream()
}

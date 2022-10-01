/* eslint-disable no-unused-expressions */
import { createCanvas, loadImage, registerFont } from 'canvas'
import { Stream } from 'stream'
import { join } from 'path'

export async function genshinAchievement(text: string): Promise<Stream | never> {
  registerFont(join(__dirname, 'assets', 'zh-cn.ttf'), { family: 'genshin' })
  const s: string = text.trim()

  if (s.trim() == "" || s.trim().length > 50) throw new Error("Length must be less than 50 characters and not empty")

  const secondLine: string[] = [`"` + s, `"` + s]

  secondLine[0] = secondLine[0].slice(0, secondLine[0].slice(0, 25).lastIndexOf(' '))
  secondLine[1] = secondLine[1].slice(secondLine[1].slice(0, 25).lastIndexOf(' '))

  const canvas = createCanvas(719, 270)
  const ctx = canvas.getContext('2d')
  const myimg = await loadImage(join(__dirname, 'assets', 'row-2-column-1.png'))
  
  ctx.drawImage(myimg, 0, 0, 719, 270)
  ctx.font = '28px "genshin"'
  ctx.fillStyle = '#8c7d6f'
  ctx.fillText(s.length > 27 ? secondLine[0] : `"` + s + `"`, 220, 145)

  s.length > 25 ? ctx.fillText(secondLine[1], 225, 190) : ''
  return canvas.createPNGStream()
}

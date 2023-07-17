import huajianji1 from 'chinese-poetry/chinese-poetry/wudai/huajianji/huajianji-1-juan.json'
import huajianji2 from 'chinese-poetry/chinese-poetry/wudai/huajianji/huajianji-2-juan.json'
import huajianji3 from 'chinese-poetry/chinese-poetry/wudai/huajianji/huajianji-3-juan.json'
import huajianji4 from 'chinese-poetry/chinese-poetry/wudai/huajianji/huajianji-4-juan.json'
import huajianji5 from 'chinese-poetry/chinese-poetry/wudai/huajianji/huajianji-5-juan.json'
import huajianji6 from 'chinese-poetry/chinese-poetry/wudai/huajianji/huajianji-6-juan.json'
import huajianji7 from 'chinese-poetry/chinese-poetry/wudai/huajianji/huajianji-7-juan.json'
import huajianji8 from 'chinese-poetry/chinese-poetry/wudai/huajianji/huajianji-8-juan.json'
import huajianji9 from 'chinese-poetry/chinese-poetry/wudai/huajianji/huajianji-9-juan.json'
import caocaoshiji from 'chinese-poetry/chinese-poetry/caocaoshiji/caocao.json'
import lunyu from 'chinese-poetry/chinese-poetry/lunyu/lunyu.json'
import tang300 from 'chinese-poetry/chinese-poetry/json/唐诗三百首.json'
import song300 from 'chinese-poetry/chinese-poetry/ci/宋词三百首.json'

export default [
  {
    title: '花间集 第一章',
    data: huajianji1
  },
  {
    title: '花间集 第二章',
    data: huajianji2
  },
  {
    title: '花间集 第三章',
    data: huajianji3
  },
  {
    title: '花间集 第四章',
    data: huajianji4
  },
  {
    title: '花间集 第五章',
    data: huajianji5
  },
  {
    title: '花间集 第六章',
    data: huajianji6
  },
  {
    title: '花间集 第七章',
    data: huajianji7
  },
  {
    title: '花间集 第八章',
    data: huajianji8
  },
  {
    title: '花间集 第九章',
    data: huajianji9
  },
  {
    title: '曹操诗集',
    data: caocaoshiji.map(item => ({ ...item, author: '曹操' }))
  },
  {
    title: '论语',
    data: lunyu.map(item => ({ ...item, title: item.chapter }))
  },
  {
    title: '唐诗三百首',
    data: tang300
  },
  {
    title: '宋词三百首',
    data: song300
  }
]

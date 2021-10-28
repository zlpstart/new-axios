export default {
    detailGutters: 24,
    uploadUrl: `${process.env.VUE_APP_BASE_API}`, // 文件上传
    publicFileUrl: `${process.env.VUE_APP_PUBLIC_FILE_PATH}`, // 文件公告访问地址
    // 换肤废弃
    theme: 'theme1',
    skinList: [
      {
        background: 'red',
        imageUrl: 'p1.jpeg',
        color: 'blue'
      },
      {
        background: 'yellow',
        imageUrl: 'p2.jpg',
        color: 'brown'
      },
      {
        background: 'green',
        imageUrl: 'p3.jpeg',
        color: 'pink'
      }
    ]
  }
  
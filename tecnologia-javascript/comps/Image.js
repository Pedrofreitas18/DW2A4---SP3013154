import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHAoVqCeCH9E4pX5c2wU44rWmDavGr5vulSw&usqp=CAU`
}

const ImageHome = (props) => {
  return (
    <Image
      loader={myLoader}
      src="me.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  )
}

export default ImageHome;
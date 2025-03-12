import './Banner.scss'

function Banner({banner, alt, text} : {banner : string, alt : string, text : string}) {

    return (
        <div className='banner'>
                <img src={banner} alt={alt} />
                <h1>{text}</h1>
            </div>
    )
}

export default Banner

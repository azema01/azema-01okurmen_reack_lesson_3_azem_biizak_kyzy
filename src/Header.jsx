import Logo from './assets/logo.svg'


function Header() {
    return (
        <div className="container header">
            <div className="h-logo">
                <img src={Logo} alt="" />
            </div>
            <div className="h-nav">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Promotions</a>
                <a href="">Blogs</a>
                <a href="">Contact Us</a>
            </div>


            <div className="hot">
                <span>HOT</span>
            </div>

            <div className="h-buttons">
                <button>Masuk</button>
                <button className='green-btn'>Daftar Sekarang</button>
            </div>
        </div>

      
    )
}

export default Header
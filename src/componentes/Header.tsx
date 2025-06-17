type Props = {
    likesCount: number;
}

function Header( {likesCount}: Props ) {
    return <header>
        <h1>Header</h1>
        <p>Mis likes: {likesCount}</p>
    </header>
}

export default Header
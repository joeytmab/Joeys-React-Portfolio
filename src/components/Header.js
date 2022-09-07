const styles = {
    header: {
        padding: '0 0 5% 5%'
    }
};

const Header = (props) => {
    return (
        <div>
           <img src={require('../images/portlogo.png')} alt="logo" style={styles.header} />
            {/* <Navigation loadAbout={props.loadAbout} loadProjects={props.loadProjects} loadResume={props.loadResume} style={props.style}/> */}
            
        </div>
    )
}

export default Header;
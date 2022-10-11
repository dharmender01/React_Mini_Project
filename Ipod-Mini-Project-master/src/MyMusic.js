import React from 'react';
// import sound from './assets/music/Senorita.mp3'

class MyMusic extends React.Component{
    
    constructor(){
        super();
        this.state = {
            isMounted : true
        }
    }

   
    componentDidMount(){
        let self = this;
        self.props.audio.play();

       
            self.props.audio.addEventListener("timeupdate",function(){
                if(self.state.isMounted){
                    var pos = self.props.audio.currentTime/self.props.audio.duration;
                    self.updateTime();
                    let fill = document.getElementById("fill");
                    console.log(fill);
                    if(fill !== null){
                        fill.style.width = pos*100 + "%";
                    }
                }
            })
        
    }


    updateTime = () =>{
       
        this.setState({
            audio : this.props.audio
        })
    }

    componentWillUnmount(){
        this.setState({
            isMounted:false
        })
    }

    render(){
         let audio = this.props.audio;
        return(
            <div style={styles.myMusicContainer}>
                <div style={styles.titleBar}>
                        <p style={{fontWeight:'bold'}}>iPod</p>
                        <img style={styles.battery} src="data:image/png;base64,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" alt=''></img>
                </div>

                <div style={styles.info}>
                    <img style={styles.image} src="https://images.news18.com/ibnlive/uploads/2019/07/Shawn-Mendes-Camila-Cabello.jpg" alt=''></img>
                    <div style={styles.subInfo}>
                        <h4 style={{marginBottom:'0.5rem'}}>Senorita</h4>
                        <p style={{marginBottom:'0'}}>Camilla Cobello</p>
                        <p>Shawn Mendes</p>
                    </div>
                    
                </div>

                <div style={styles.statusBar}>
                    <p style={styles.currTime}>{audio !== null ? Math.floor(audio.currentTime) : '0 / 0'}</p>
                    <div style={styles.seekBar}>
                        <div style={styles.fill} id='fill'></div>
                    </div>
                    <p style={styles.dur}>{audio != null ? Math.floor(audio.duration) : '0 / 0'}</p>
                </div>
                
            </div>
        );
    }
    
}

const styles = {
    myMusicContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
    },
    image : {
        height : '75%',
        width : '45%',
        alignSelf : 'center'
    },
    info : {
        height : '70%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        backgroundColor: "#adaddc"
    },
    statusBar : {
        width : '100%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-evenly'
    },
    subInfo : {
        alignSelf : 'center'
    },
    seekBar : {
        width:'70%',
        height:'20%',
        border : '1px solid grey',
        cursor: 'pointer',
        alignSelf : 'center',
        display: 'flex',
    },
    fill : {
        height: '100%',
        backgroundColor: 'royalblue',
    },
    currTime : {
        margin : '0',
        alignSelf : 'center'
    },
    dur : {
        margin : '0',
        alignSelf : 'center'
    },
    titleBar : {
        height:'10%',
        width:'100%',
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 5px 10px 8px',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between'

    },
    battery :{
        width : '20px',
        height: '20px',
    }
}


export default MyMusic;
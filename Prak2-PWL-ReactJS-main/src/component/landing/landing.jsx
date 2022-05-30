import React from 'react'
import {createUseStyles} from 'react-jss'
import aninda from './../../assets/aninda.jpeg'
import {useNavigate} from "react-router-dom";

const Landing = () => {
  const classes = useStyles()
  return (

    <div className={classes.container}>
        <div>
            <ul className={classes.ul}>
                <li><a href="/"                             className={classes.a}> Home </a></li>
                <li><a href="/"                           className={classes.a}> Portofolio     </a></li>
                <li><a href="/skills"                      className={classes.a}> Skills      </a></li>
            </ul>
        </div>

        <div className={classes.body}>
            <div className={classes.wrapFoto}>
                <img src={aninda} className={classes.foto} alt="aninda" />
            </div>
            <div className={classes.wrapText}>
                <h1 className={classes.introduce}> Hello!</h1>
                <h2 className={classes.introduce2}> I'm aninda a andiani</h2>
                <h3 className={classes.introduce3}> It’s so nice to finally meet you in person!, I’m excited to share with you about my experience...</h3>
            </div>
        </div>

    </div>
  )
}

const useStyles = createUseStyles({
    container: {
        backgroundColor : '#F5F5DC',
        margin: 'auto',
        color : '#F5F5DC',
        width: '100%',
        height : '100%',
    },
    introduce : {
        fontSize : 70,
        margin: 20,
        padding: 50, 
        width : '100%',
        alignItems :'center',
        textAlign : 'center',
        top : '50%',
        left : '50%',
        color : '#CD853F',
    },
    introduce2 : {
        fontSize : 60,
        margin: 0,
        padding: 0, 
        width : '100%',
        alignItems :'center',
        textAlign : 'center',
        top : '50%',
        left : '0%',
        color : '#CD853F',
    },
    introduce3 : {
        fontSize : 25,
        margin: 0,
        padding: 0, 
        width : '100%',
        alignItems :'center',
        textAlign : 'center',
        top : '50%',
        left : '0%',
        color : '#CD853F',
    },
    foto : {
        width : '100%',
        height : '100%',       
    },
    wrapText : {
        width : '50%',
        height : '100%',
        alignItems : 'center',  
        alignSelf : 'center',     
    },
    wrapFoto : {
        width : '70%',
        height : '100%',       
    },
    body : {
        display : 'flex',
        flexDirection : 'row',
    },
    ul : {
        position : 'fixed', 
        width : '100%',
        listStyle : 'none',
        marginTop: 0,
        padding: 0,
        backgroundColor : '#F5F5DC',
    }, 
    a : {
        float : 'right',
        alignItems : 'center',
        textAlign : 'center',
        color : '#8B4513',
        padding : '20px',
        textDecoration : 'none',
        fontWeight :'bold',
        fontSize: 35,
    },
   
})
export default Landing;
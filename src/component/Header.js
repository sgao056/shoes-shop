import React, { Component } from 'react'

export default function Header(props) {

        return (
            <div className='header'>
                <div className='grid'>
                    <div className='start'>
                        <a href="/">HOME</a>
                    </div>
                    <div className='end'>
                        {props.nickname ? 
                        (
                            <span className="nickname">                       
                            <i class="fas fa-user"></i>
                            {props.nickname}
                            </span>
                        ):(
                            <React.Fragment>
                            <a href="/login">LOGIN</a>
                            <a href="/">REGISTER</a>
                            </React.Fragment>
                        )}
                    </div>
                </div>
            </div>
        )

}

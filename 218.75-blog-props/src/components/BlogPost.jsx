import React from "react";

export default function BlogPost(props) {
   console.log(props)
    return (
       <main>
       <div className="blogs">
           <p className="blog--title"> 
           {props.title}</p>
           <p className="blog--subtitle">{props.subTitle}</p>
           <p className="blog--author--date"> Posted by <a className="blog--author">{props.author}</a> on <a className="blog--date">{props.date}</a></p>
           <hr></hr>
       </div>

       </main>
   ) 
}

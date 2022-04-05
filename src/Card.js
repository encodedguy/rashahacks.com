import React from 'react';

function Card(props){
    return <div class="content sticky">
    <div class="content-box block">
      <a href={props.writeup_link} target="_blank"><p class="content-box-content">{props.writeup_name}</p></a>
    </div>
    <div class="content-box block">
      <a href={props.author_link} target="_blank"><p class="content-box-content">{props.author_name}</p></a>
    </div>
    <div class="content-box block">
      <a href={props.bug_link} target="_blank"><p class="content-box-content">{props.bug_name}</p></a>
    </div>
  </div>
}


export default Card;
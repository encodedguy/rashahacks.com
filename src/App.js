import React from 'react';
import data from './data7381682.js';
import Card from './Card.js'
import Header from './Header.js'
import Footer from './Footer.js'
import './styles.css'

function CreateCard(data){
    return (<Card
        key = {data.id}
        author_name = {data.author_name}
        author_link = {data.author_link}
        writeup_link = {data.writeup_link}
        writeup_name = {data.writeup_name}
        bug_name = {data.bug_name}
        bug_link = {data.writeup_link}
        />);
}

function App(){
    return <div>   
      <Header />
      {data.map(CreateCard)}
      <Footer />
    </div>
    
}

export default App;
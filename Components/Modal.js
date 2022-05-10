import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'
import React from 'react'
 import Logos from "../images.js"
 

const Modal = ({image,bookName, rating, authorName, category, synopsis, clickCheck, exitClick}) => {
  return (
    <div className="modal--window"  id="modal--id" onClick={clickCheck}>

    <img className="modal--thumbnail" src={image} />
    <span className="modal--book-info">{bookName}<br />
    Rating: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png" 
             className="card--star" />
              {rating} <br />
    {authorName} <br />
   {category}<br /></span>
    <span className="modal--synopsis"><h2 style={{fontSize:"25px"}}>Description:</h2>{synopsis}</span>
    <div className="modal--stores">
    <h2 className="modal--title" style={{color:"white"}}>Most popular online stores:</h2>
        <a id="modal--stores" href={`https://www.amazon.com/s?k=${bookName}`} target="_blank"><img className="modal--stores-logo" src={Logos[0]}/></a>
        <a id="modal--stores" href={`https://www.ebay.com/sch/i.html?_nkw=${bookName}`} target="_blank"> <img className="modal--stores-logo" src={Logos[1]}/></a>
        <a id="modal--stores" href={`https://www.powells.com/searchresults?keyword=${bookName}`} target="_blank"><img className="modal--stores-logo" src={Logos[2]}/></a>
        <a id="modal--stores" href={`https://www.booksamillion.com/search?query=${bookName}`} target="_blank"><img className="modal--stores-logo" src={Logos[3]}/></a>
        <a id="modal--stores" href={`https://www.barnesandnoble.com/s/${bookName}`} target="_blank"><img className="modal--stores-logo" src={Logos[4]}/></a>
        <a id="modal--stores" href={`https://www.betterworldbooks.com/search/results?q=${bookName}`} target="_blank"><img className="modal--stores-logo" src={Logos[5]}  /></a>
        <a id="modal--stores" href={`https://www.abebooks.com/servlet/SearchResults?kn=${bookName}`} target="_blank"><img className="modal--stores-logo" src={Logos[6]}/></a>
        <a id="modal--stores" href={`https://www.alibris.com/booksearch?title=${bookName}`} target="_blank"><img className="modal--stores-logo" src={Logos[7]}/></a>
        <a id="modal--stores" href={`https://www.biblio.com/search.php?keyisbn=${bookName}`} target="_blank"><img className="modal--stores-logo" src={Logos[8]}/></a>
        <a id="modal--stores" href={`https://bookshop.org/books?keywords=${bookName}`} target="_blank"><img className="modal--stores-logo" src={Logos[9]} style={{height: "45px"}}/></a>
        <a id="modal--stores" href={`https://www.thriftbooks.com/browse/?b.search=${bookName}`} target="_blank"><img className="modal--stores-logo" src={Logos[10]} style={{width: "115px",height: "45px"}}/></a>
        <a id="modal--stores" href={`https://www.bookdepository.com/search?searchTerm=${bookName}`} target="_blank"><img className="modal--stores-logo" src={Logos[11]} style={{width: "115px"}}/></a>
    
    
    </div>
    
    <div className="modal--exit" onClick={exitClick}>&#10006;</div>
    </div>
  )
}


Modal.defaultProps = {
    image: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg",
    bookName: "No name available",
    rating: "No rating available",
    authorName: "John Doe",
    category: "No information available",
    synopsis: "No description available."

  }
export default Modal
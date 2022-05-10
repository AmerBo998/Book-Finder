 
import Header from "./Components/Header"
import Search from "./Components/Search"
import Card from "./Components/Card"
import Modal from "./Components/Modal"
import axios from "axios";
import {useState, useEffect} from 'react'
function App() {

    const [bookName, setBookName] = useState("");
    const [bookData, setBookData] = useState([]);
    const [details, setDetails] = useState([]);
    const [modalState, setModalState] = useState(false);
    
      const exitClick = () => {

      setModalState(false)
                        
      }


   
      useEffect(() => {
       
      document.addEventListener("click", (e) => {
                                  
          var cName=e.target.className
          var parentClassName=e.target.parentElement.className
          var parentId=e.target.parentElement.id
                      
      if(cName === "modal--window" || parentClassName === "modal--window" ||
         cName === "" || parentId=== "modal--stores")     
         {
               return;  
            }

           else { 
                 setModalState(false)
            }},true)}, []);
    
    

        function getBookName(event){

            const bookName=event.target.value;

            setBookName(bookName);


        }

        function propertyCheck(array){

            const shortcut=array.volumeInfo;
            return shortcut.hasOwnProperty("imageLinks") ? true : false;

            
        }

        function handleChange(event) {

          event.preventDefault();
          axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=AIzaSyCZkh8ROXi4U4nkzSNCOk3_kl7i-O0jGg4&maxResults=40`)
          .then(data => {

            setBookData(data.data.items);
               
          })}

   
          const showDetails = (e) => {

             setDetails(bookData[e.target.id])
             setModalState(!modalState); 
             window. scrollTo(0, 0);
           
            }


      

        
  return (
    <div className="App">
  
     <Header />
     <Search handleChange={handleChange} getBookName={getBookName} />
    
      <div className="cards--wrap">
      { bookData.map((book, key) => (

      <Card 
      showDetails={showDetails}
      key={book.id}
      cardId={key}
      image={propertyCheck(book) ? book.volumeInfo.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"} 
      title={book.volumeInfo.title} rating={book.volumeInfo.averageRating}/>
   

))}

           {modalState ? <Modal 
          
            exitClick={exitClick}
           image={propertyCheck(details) ? details.volumeInfo.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"} 
           bookName={details.volumeInfo.title}
           rating={details.volumeInfo.averageRating}
           authorName={details.volumeInfo.authors}
           category={details.volumeInfo.categories}
           synopsis={details.volumeInfo.description}/>
            : null}  

       
</div>
     
           
       

    </div>
  );
}

export default App;

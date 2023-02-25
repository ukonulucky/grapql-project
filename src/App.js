import { ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client"
import './App.css';
import Book from "./components/Book";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import BookDetails from "./components/BookDetails";



function App() {
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

  return (
  <ApolloProvider client={client}>
   <Router>
     <Routes>
      <Route path="/" element={<Book />} /> 
      <Route path="/bookDetails" element={<BookDetails />} /> 
     </Routes>
   </Router>
  </ApolloProvider>
  );
}

export default App;

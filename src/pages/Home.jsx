import "../css/index.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from '../components/Modal';

function Home() {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showViewMore, setShowViewMore] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [languageFilter, setLanguageFilter] = useState("");
  const [visibilityFilter, setVisibilityFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchRepos = () => {
    fetch(
      `https://api.github.com/users/Confidentwebs/repos?per_page=6&page=${currentPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          setShowViewMore("End of Repos");
        } else {
          setUser([...user, ...data]);
          setShowViewMore("View More");
        }
      });
  };

  useEffect(() => {
    fetchRepos();
  }, [currentPage]);

  const viewMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const filterRepos = (repo) => {
    return (
      (languageFilter === "" || repo.language === languageFilter) &&
      (visibilityFilter === "" || repo.visibility === visibilityFilter) &&
      (searchTerm === "" ||
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  const userElements = user
    .filter(filterRepos)
    .map((userElement) => {
      return (
        <div className="repo-card" key={userElement.id}>
          <Link to={`/repodetails/${userElement.name}`}>
            <h2 className="repo-name">{userElement.name}</h2>
          </Link>
          <p className="language">
            Language: {userElement.language === null ? "none" : userElement.language}
          </p>
          <p className="date">Start date & time: {userElement.created_at}</p>
          <p className="visibility">Visibility: {userElement.visibility}</p>
        </div>
      );
    });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const createRepo = () => {
    // Open the modal when the button is clicked
    openModal();
  };

  const handleCreateRepo = ({ repoName, description, visibility }) => {
    // Logic to create a new repository
    // For testing purposes, you can log the repository data
    console.log('Creating repository:', { repoName, description, visibility });

    // Simulate adding the new repository to the list
    const newRepo = {
      id: Math.random(), // Generate a unique ID for the new repository
      name: repoName,
      language: '', // Set the language and visibility as needed
      created_at: new Date().toISOString(), // Set the creation date
      visibility: visibility
    };

    // Add the new repository to the list
    setUser([...user, newRepo]);

    // Close the modal
    closeModal();
  };

  const handleDeleteRepo = (repoId) => {
    // Filter out the repository with the given ID
    const updatedUser = user.filter(repo => repo.id !== repoId);
  
    // Update the user state with the filtered array
    setUser(updatedUser);
  };
  

  return (
    <>
      <div className="nav-left" style={{marginLeft: '5%', display: 'flex', gap: '10px', border: '2px solid rgb(114, 101, 235)', width: '250px', fontSize: '20px', padding: '10px', boxShadow: '2px 4px 0px white'}}>
        <Link to="/"  >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/ErrorPage" >Error test</Link>
      </div>
      <div className="filter-container" style={{ boxShadow: '2px 4px 0px rgb(114, 101, 235)', textAlign: "right", marginRight: '5%', bottom: '20px', padding: '10px' }}>
        <input
          type="text"
          placeholder="Search by repo name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={languageFilter}
          onChange={(e) => setLanguageFilter(e.target.value)}
        >
          <option value="">Filter by Language</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="Javascript">JavaScript</option>
          <option value="React">React</option>
          {/* Add more options for other languages */}
        </select><br></br>
        <select
          value={visibilityFilter}
          onChange={(e) => setVisibilityFilter(e.target.value)}
        >
          <option value="">Filter by Visibility</option>
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select><br></br>
        <button style={{color: 'red'}}  onClick={createRepo}>Create new repository</button>
      </div>
      
      {isModalOpen && <Modal onClose={closeModal} onCreateRepo={handleCreateRepo} />}
      <section className="repo-container">{userElements}</section>
      <p className="view-more" onClick={viewMore}>
        {showViewMore}
      </p>
    </>
  );
}

export default Home;

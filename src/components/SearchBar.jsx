import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      console.log(searchTerm + "this is the search term");
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 10,
        border: "1px solid #e3e3e3",
        p: 1,
        boxShadow: "none",
        mr: { sm: 2 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search.."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
      <IconButton type="submit" sx={{ p: "2px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;

import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import Styled from "./Search.styled";

type SearchProps = {
  cityName?: string;
};

function Search({ cityName = "" }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState(cityName);
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const term = searchTerm.trim();

    if (term.length === 0) {
      return;
    }

    navigate(`/mesto/${term}`);
  };

  return (
    <Styled.Container onSubmit={handleSubmit}>
      <Styled.Input
        placeholder="Išči po mestih"
        value={searchTerm}
        onChange={handleChange}
      />
    </Styled.Container>
  );
}

export default Search;

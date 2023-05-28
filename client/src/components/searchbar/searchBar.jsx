import {
  SearchContainer,
  SearchIcon,
  SearchIconContainer,
  SearchInput,
} from "./searchbar.styles";

export default function SearchBar(props) {
  const {onSearch, onChange} = props;

  return (
    <SearchContainer>
      <SearchInput
        type="search"
        placeholder="Search character"
        onChange={onChange}
      />
      <SearchIconContainer>
        <SearchIcon onClick={onSearch} />
      </SearchIconContainer>
    </SearchContainer>
  );
}

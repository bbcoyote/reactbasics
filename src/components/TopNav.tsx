import { useRef } from "react";

interface TopNavProps {
  setSearchTerm: (searchTerm: string) => void;
  searchTerm: string;
}

const TopNav = ({ setSearchTerm }: TopNavProps) => {
  const searchRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (searchRef.current) {
      setSearchTerm(searchRef.current.value);
    }
  };

  return (
    <>
      <h1>Hello Welcome To The Most Basic React Website!</h1>
      <input
        ref={searchRef}
        type='text'
        className='search-bar'
        placeholder='Try a search'
      />
      <button onClick={handleClick}>Add Search</button>
    </>
  );
};

export default TopNav;

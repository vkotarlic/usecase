import Button from 'components/core/Button/Button';
import TextInput from 'components/core/Input/TextInput';
import React from 'react';

const Search = () => {
  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  };

  const handleClick = () => {
    console.log('Click');
  };

  return (
    <div>
      <TextInput name={'Test'} placeholder={'Test'} onChange={handleInput} />
      <Button label="Submit" type="button" onClick={handleClick} />
    </div>
  );
};

export default Search;

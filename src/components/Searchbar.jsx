import { Button, Input, Select, Space } from 'antd';
import { Option } from 'antd/es/mentions';
import React, { useState } from 'react';

const SearchBar = ({}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [type, setType] = useState('Recipe');

  const selectBefore = (
    <Select defaultValue={type} onChange={(e) => setType(e.target.value)}>
      <Option value="Recipe">Recipe</Option>
      <Option value="Chef">Chef</Option>
    </Select>
  );

  return (
    <Space.Compact>
      <Input
        addonBefore={selectBefore}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button type="primary" className="text-black">
        Search
      </Button>
    </Space.Compact>
  );
};

export default SearchBar;

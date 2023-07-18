import { Button, Input, Select, Space } from 'antd';
import { Option } from 'antd/es/mentions';
import React, { useState } from 'react';

const SearchBar = ({}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [type, setType] = useState('Recipe');

  const selectBefore = (
    <Select defaultValue={type} onChange={(e) => setType(e.target.value)}>
      <Select.Option value="Recipe">Recipe</Select.Option>
      <Select.Option value="Chef">Chef</Select.Option>
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

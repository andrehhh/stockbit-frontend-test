import React from 'react';

import { render, screen } from '@testing-library/react';

import MoviesList from '../MoviesList';

test('movies list search keyword is correct', () => {
    const keyword = "batman";

    render(<MoviesList submitKeyword={keyword} />);
    const searchKeyword = screen.getByTestId("search-keyword");
    expect(searchKeyword).toContainHTML(`Search for: ${keyword}`);
;});  
import styled from 'styled-components';
import { color, flexbox, border, space, layout, compose } from 'styled-system';

const Box = styled('div')(compose(flexbox, color, border, space, layout));

export default Box;

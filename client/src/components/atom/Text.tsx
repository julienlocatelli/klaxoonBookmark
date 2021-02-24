import styled from 'styled-components';
import { color, typography, compose } from 'styled-system';

const Text = styled('span')(compose(typography, color), {
	fontSize: 18
});

export default Text;

import styled from 'styled-components';
import { color, typography, compose } from 'styled-system';

const Text = styled('span')(compose(typography, color));

Text.defaultProps = {
	fontSize: 14
};

export default Text;

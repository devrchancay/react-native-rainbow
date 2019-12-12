import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { BaseProps, BadgeVariant } from '../types';
import { StyledBadge, StyledBadgeContainer } from './styled';
import BadgeContent from './badgeContent';

interface Props extends BaseProps {
    label?: ReactNode;
    variant?: BadgeVariant;
}

/**
 * Badges are labels which hold small amounts of information.
 */

const Badge: React.FC<Props> = props => {
    const { label, variant, style } = props;

    return (
        <StyledBadgeContainer style={style}>
            <StyledBadge variant={variant}>
                <BadgeContent variant={variant}>{label}</BadgeContent>
            </StyledBadge>
        </StyledBadgeContainer>
    );
};

Badge.propTypes = {
    /** The text to be displayed inside the badge. */
    label: PropTypes.node,
    /** The variant changes the appearance of the badge.
     * Accepted variants include default, lightest, brand and outline-brand.
     * This value defaults to default. */
    variant: PropTypes.oneOf(['default', 'lightest', 'outline-brand', 'brand']),
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Badge.defaultProps = {
    label: null,
    variant: 'default',
    style: undefined,
};

export default Badge;

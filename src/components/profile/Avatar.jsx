import PropTypes from "prop-types";

import { getImageUrl } from "../../utils/getImageUrl";

const Avatar = ({ size, person }) => {
    return (
        <div>
            <img src={getImageUrl(person)} alt={person?.name} width={size} height={size} className="rounded-full ring-2" />
        </div>
    )
};

export default Avatar;
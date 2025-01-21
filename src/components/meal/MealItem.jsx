import PropTypes from 'prop-types';

const MealItem = ({ name, isPacked }) => {
    return (
        <div>
            <li className="text-slate-500 font-semibold text-xl list-disc ml-5">{isPacked ? <del> name + "✔" </del> : name}</li>
        </div>
    )
}

MealItem.PropTypes = {
    name: PropTypes.string.isRequired,
    isPacked: PropTypes.bool.isRequired
};

export default MealItem;
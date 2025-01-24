import PropTypes from 'prop-types'

const Container = ({ children }) => {
    return (
        <section className='flex justify-center items-center h-screen'>
            <div className='w-[450px] p-5 rounded-lg shadow bg-white'>
                {children}
            </div>
        </section>
    )
}

Container.propTypes = {
    children: PropTypes.node
};

export default Container
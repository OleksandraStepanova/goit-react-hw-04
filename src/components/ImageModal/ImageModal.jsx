import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');



export default function ImageModal({ isOpen, isClose, value }) {
  

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={isClose}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0,0,0,0.75)',
                }

            }}
            contentElement={() => <img src={value.urls.full} alt={value.alt_description}
                style={{
                    maxWidth: '100%',
                    maxHeight: '90vh',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    transform: 'translate(-50%, -50%)',
                }} />
            }
        />)
}
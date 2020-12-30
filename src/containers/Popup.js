import Popup from 'react-animated-popup'
 
// ...
 
const [visible, setVisible] = useState(false)
 
return (
  <Popup visible={visible} onClose={() => setVisible(false)}>
    <p>I am a popup!</p>
  </Popup>
)
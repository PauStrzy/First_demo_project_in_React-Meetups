import { useNavigate } from 'react-router-dom'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetupPage() {
	const navigate = useNavigate()

	function onAddMeetupHandler(meetupData) {
		fetch('https://react-getting-started-fbd34-default-rtdb.europe-west1.firebasedatabase.app/meetups.json', {
			method: 'POST',
			body: JSON.stringify(meetupData),
			headers: {
				'Content-type': 'application/json',
			},
		}).then(() => {
			navigate('/', { replace: true })
		})
	}
	return (
		<section>
			<h1>Add new meetup</h1>
			<NewMeetupForm onAddMeetup={onAddMeetupHandler} />
		</section>
	)
}

export default NewMeetupPage

// CSS
import './Profile.css';

// Image
import avatar from 'img/avatar.png';

const Profile = () => {
	return (
		<div className="profile">
			<a href={avatar} target="_blank" rel="noreferrer">
				<img src={avatar} alt="Avatar do grupo Zé da Guiomar" />
			</a>
			<p>@zedaguiomar</p>
		</div>
	);
};

export default Profile;

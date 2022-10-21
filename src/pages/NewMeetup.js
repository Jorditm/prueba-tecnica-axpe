import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetupsPage(props) {
  const { meetupData } = props;

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm meetupData={meetupData} />
    </section>
  );
}

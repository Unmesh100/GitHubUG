export default function About() {
  return (
    <>
      <section className="card card-cover shadow p-3 m-5">
        <article className="mt-3">
          <h3>👋 Introduction</h3>
          <p>
            GitHubUG is a web application that helps users retrieve
            information about their GitHub statistics, which dynamically change
            with their profile activity.
          </p>
        </article>

        <article className="mt-3">
          <h3>🔨 What does it do?</h3>
          <p>
            GitHubUG contains a search feature that searches for all the
            Github users using the text entered by the user. It displays the
            users whose username fully or partially matches with the entered
            text. This GitHubUG differs from others in the sense that, it
            not only shows the basic information of that GitHub user account but
            also shows their activities, contributions, commits, pull requests
            and overall profile score.
          </p>
        </article>

        <article>
          <h3 className="mt-3">🙏🏽 Support</h3>
          <p>
            This project needs a star from you. Do not forget to leave a star 🌟
          </p>
        </article>

        

      
      </section>
    </>
  )
}

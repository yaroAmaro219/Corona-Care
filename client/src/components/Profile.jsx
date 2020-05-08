import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      personalPost: null,
    }
  }

  componentDidMount() {
    this.props.getPersonalPost(this.props.match.params.id);
  }

  // personal = (e) => {
  //   const { value } = e;
  //   this.setState(prevState => ({
  //     personalPost: {
  //       ...prevState.personalPost,
  //       personalPost: value
  //     }
  //   }))
  // }

  render() {
    const personalPost =
      this.props.personalPost
      &&
      this.props.personalPost.posts.map((post, index) => {

        return (
          <>
            <div class="post">
              <button class="like-button">
                <svg width="8vw" height="8vw" viewBox="0 0 89 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M86.8467 16.3944C85.4659 13.1862 83.4747 10.279 80.9848 7.83545C78.4931 5.38463 75.5553 3.437 72.3311 2.09847C68.9878 0.704978 65.402 -0.00828799 61.7817 7.26568e-05C56.7028 7.26568e-05 51.7475 1.39556 47.4412 4.03147C46.411 4.66202 45.4323 5.35459 44.5051 6.10919C43.5779 5.35459 42.5992 4.66202 41.569 4.03147C37.2627 1.39556 32.3074 7.26568e-05 27.2285 7.26568e-05C23.5712 7.26568e-05 20.0273 0.702983 16.6791 2.09847C13.4442 3.44226 10.5288 5.37527 8.02534 7.83545C5.5322 10.2762 3.54061 13.1841 2.16344 16.3944C0.73145 19.7332 0 23.2788 0 26.9277C0 30.3699 0.700543 33.9568 2.09133 37.6057C3.25547 40.6551 4.92441 43.8182 7.05694 47.0123C10.436 52.0671 15.0823 57.3389 20.8515 62.6831C30.4118 71.5418 39.8795 77.6613 40.2812 77.9094L42.7228 79.4806C43.8046 80.1731 45.1953 80.1731 46.2771 79.4806L48.7187 77.9094C49.1204 77.6509 58.5778 71.5418 68.1484 62.6831C73.9176 57.3389 78.5639 52.0671 81.9429 47.0123C84.0755 43.8182 85.7547 40.6551 86.9086 37.6057C88.2993 33.9568 88.9999 30.3699 88.9999 26.9277C89.0102 23.2788 88.2787 19.7332 86.8467 16.3944ZM44.5051 71.3041C44.5051 71.3041 7.8296 47.7256 7.8296 26.9277C7.8296 16.3944 16.5143 7.85612 27.2285 7.85612C34.7593 7.85612 41.2908 12.0736 44.5051 18.2344C47.7194 12.0736 54.2509 7.85612 61.7817 7.85612C72.4959 7.85612 81.1806 16.3944 81.1806 26.9277C81.1806 47.7256 44.5051 71.3041 44.5051 71.3041Z" fill="white" />
                </svg>
              </button>
              <div class="post-text">
                <h1 class="profile-post-name">{post.name}</h1>
                <p class="profile-post-content"> {post.content}</p>
                <h2 class="profile-post-title">I Need Help With {post.title}</h2>
                <div class="post-image-container">
                  {
                    (post.title === 'Groceries')
                      ?
                      <svg class="profile-post-image" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.999 80C24.4992 80 20.0493 84.5 20.0493 90C20.0493 95.5 24.4992 100 29.999 100C35.4988 100 39.9986 95.5 39.9986 90C39.9986 84.5 35.4988 80 29.999 80ZM0 0V10H9.99966L27.999 47.95L21.2493 60.2C20.4493 61.6 19.9993 63.25 19.9993 65C19.9993 70.5 24.4992 75 29.999 75H89.9969V65H32.0989C31.3989 65 30.8489 64.45 30.8489 63.75L30.9989 63.15L35.4988 55H72.7475C76.4974 55 79.7973 52.95 81.4972 49.85L99.3966 17.4C99.8091 16.6369 100.017 15.7799 99.9989 14.9126C99.9812 14.0454 99.7389 13.1975 99.2956 12.4519C98.8523 11.7063 98.2232 11.0885 97.4697 10.6587C96.7162 10.229 95.8641 10.002 94.9967 10H21.0493L16.3494 0H0ZM79.9973 80C74.4974 80 70.0476 84.5 70.0476 90C70.0476 95.5 74.4974 100 79.9973 100C85.4971 100 89.9969 95.5 89.9969 90C89.9969 84.5 85.4971 80 79.9973 80Z" fill="#5BB275" />
                      </svg>
                      :
                      null
                  }
                  {
                    (post.title === 'Medication')
                      ?
                      <svg class="profile-post-image" width="75" height="116" viewBox="0 0 75 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M53.649 33.3449L62.4805 20.6342C62.9757 20.6755 63.4709 20.6755 63.9661 20.6342C66.0205 20.6332 68.0278 20.0188 69.7309 18.8699C71.4339 17.721 72.7552 16.0898 73.5254 14.1852C74.2956 12.2807 74.4798 10.1896 74.0542 8.17982C73.6286 6.17002 72.6127 4.33303 71.1366 2.90418C69.6605 1.47533 67.7915 0.519682 65.7689 0.159664C63.7463 -0.200353 61.6623 0.0516511 59.7838 0.883394C57.9053 1.71514 56.318 3.08874 55.225 4.82825C54.132 6.56776 53.5833 8.59395 53.649 10.6473V11.4726L33.0148 33.3449H53.649ZM74.2833 49.8523V41.5986H0V49.8523L12.3805 78.7402L0 107.628V115.882H74.2833V107.628L66.0296 78.7402L74.2833 49.8523ZM57.7759 82.8671H41.2685V99.3745H33.0148V82.8671H16.5074V74.6134H33.0148V58.106H41.2685V74.6134H57.7759V82.8671Z" fill="#5BB275" />
                      </svg>
                      :
                      null
                  }
                  {
                    (post.title === 'Post Office')
                      ?
                      <svg class="profile-post-image" width="105" height="84" viewBox="0 0 105 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M93.7498 0H20.8332C15.0884 0 10.4165 4.67187 10.4165 10.4167V36.4583H20.8332V20.8333L54.1665 45.8333C55.0684 46.5087 56.1648 46.8737 57.2915 46.8737C58.4182 46.8737 59.5146 46.5087 60.4165 45.8333L93.7498 20.8333V67.7083H52.0832V78.125H93.7498C99.4946 78.125 104.166 73.4531 104.166 67.7083V10.4167C104.166 4.67187 99.4946 0 93.7498 0ZM57.2915 35.1562L24.3019 10.4167H90.2811L57.2915 35.1562Z" fill="#5BB275" />
                        <path d="M0 41.6666H36.4583V52.0833H0V41.6666ZM10.4167 57.2916H41.6667V67.7083H10.4167V57.2916ZM26.0417 72.9166H46.875V83.3333H26.0417V72.9166Z" fill="#5BB275" />
                      </svg>
                      :
                      null
                  }
                  {
                    (post.title === 'Someone To Talk To!')
                      ?
                      <svg class="profile-post-image" width="108" height="94" viewBox="0 0 108 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M40.1834 0C18.0046 0 0 13.4645 0 30.0732C0 45.2249 15.0095 57.734 34.5048 59.8007L26.231 76.301L55.0234 58.005C69.8567 53.5733 81.2544 42.7516 81.2544 30.0732C81.2544 13.4713 62.3689 0 40.1834 0Z" fill="#5BB275" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M108 60.2413C108 52.6247 100.804 44.7371 92.4891 40.8069C90.158 54.0206 79.4515 66.1841 62.5582 70.941L54.5148 75.2914C57.5912 77.5953 61.3588 79.4317 65.5872 80.6311L90.2394 93.9872L81.4099 81.9525C96.4329 80.4278 108 71.307 108 60.2413Z" fill="#5BB275" />
                      </svg>
                      :
                      null
                  }
                </div>
              </div>
              <div class='ud-buttons'>
              <Link class='edit-button' to={`${this.props.match.params.id}/posts/${post.id}`}>Edit</Link>
              <button class="delete-button" onClick={() => (this.props.deletePost(post.id))}><svg height="4vw" viewBox="-40 0 427 427.00131"  xmlns="http://www.w3.org/2000/svg"><path d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0"/><path d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/></svg></button>
              </div>
              </div>
          </>
        )
      })

    return (
      <div class="main">
        <div class="profile-top">
        <h1 class="profile-welcome">Hello {this.props.currentUser
          &&
        this.props.currentUser.first_name}</h1>
          <button class="logout-button" onClick={this.props.handleLogout}>Logout</button>
          </div>
        {personalPost}
      </div>
    )
  }
}

export default Profile;
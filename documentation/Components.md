
# Components

 * App
 * Main
    * Sidebar
        - HomeButton -> logo link back to homepage
        - GroupsList
            - GroupListItem -> link to group page
    * NavBar
        - SearchBar -> sends to search page
        - ProfileNav
            - ProfileDropdown
                - ProfileOption -> link to profile
                - ActivityOption -> # of invites, link to invites page
                - FriendsOption -> # of friends, link to friend page
                - SignoutOption -> logs user out
    * Feed
        - MakePostBlock
            - PostFormModal
        - Posts
            - Post
                - PostHeader
                - PostContent
                - PostFooter
            - Comments
                - Comment
                    - CommentHeader
                    - CommentContent
    * Footer
        - links to github and such

* SearchPage
* Sidebar
    * NavBar
    * SearchPageHeader -> filter options + search query & result #
    * SearchResults (groups and/or users)
        - SearchResult
            - GroupSearchResult
            - UserSearchResult
    * Footer

* GroupPage
    * Sidebar
    * GroupPageHeader
        - GroupHeader
        - GroupDetails -> option to edit + members list
        - EditGroupForm
    * MembersList
        - Member -> option to add as mod or remove depending on authority
    * GroupFeed
        - Posts

* ProfilePage
    * ProfileSideBar
        - HomeButton
        - UserInfo
    * ProfileFeed
        - Posts

* NewGroupPage
    * NewGroupForm
    * Footer

* LoginPage
    * LoginForm
    * Footer

* SignupPage
    * SignupForm
    * Footer
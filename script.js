$(document).ready(function() {
    $(".show-more").click(function() {
        const profileCard = $(".profile-card");
        const profileBio = $(".profile-bio");
        const profileImage = $(".profile-image");

        if (profileBio.is(":visible")) {
            // Collapse profile
            profileBio.slideUp();
            profileCard.animate({ height: "175px" });
            profileImage.css("filter", "blur(0px)");
            $(this).text("Show More");
        } else {
            // Expand profile
            profileBio.slideDown();
            profileCard.animate({ height: "290px" });
            profileImage.css("filter", "blur(4px)");
            $(this).text("Show Less");
        }
    });
});
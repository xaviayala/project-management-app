<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.js"></script>

    <!-- load bootstrap and themes from CDN -->
    <link data-require="bootstrap-css@3.3.6" data-semver="3.3.6" rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootswatch/3.3.6/darkly/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="//cloud.github.com/downloads/lafeber/world-flags-sprite/flags32.css" />

        <!-- load angular, nganimate, and ui-router from CDN -->
    <script data-require="angular.js@1.5.5" data-semver="1.5.5" src="//code.angularjs.org/1.5.5/angular.min.js"></script>
    <script data-require="angular-ui-router@*" data-semver="0.3.1" src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.3.1/angular-ui-router.min.js"></script>
    <script data-require="angular-animate@*" data-semver="1.5.6" src="//code.angularjs.org/1.5.6/angular-animate.js"></script>
    <script data-require="angular-translate@2.6.0" data-semver="2.6.0" src="//cdn.rawgit.com/angular-translate/bower-angular-translate/2.6.0/angular-translate.js"></script>

     <!-- load app specific scripts and CSS -->   
    <link rel="stylesheet" href="../Content/App.css" />
    <script src="../Scripts/app.js" type="text/javascript"></script>

    <script src="../Scripts/services/baseSvc.js" type="text/javascript"></script>
    <script src="../Scripts/services/pmSvc.js" type="text/javascript"></script>

    <script src="../Scripts/controllers/formCtrl.js" type="text/javascript"></script>
    <script src="../Scripts/controllers/pmCtrl.js" type="text/javascript"></script>

    <script src="../Scripts/directives/ng-flags.js" type="text/javascript"></script>
</asp:Content>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
</asp:Content>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">
     <!-- views will be injected here -->
    <div class="container" data-ng-app="pmApp">
        <div ui-view></div>
    </div>
</asp:Content>

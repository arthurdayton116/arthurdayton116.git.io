(this["webpackJsonparthurdayton116.git.io"]=this["webpackJsonparthurdayton116.git.io"]||[]).push([[156],{121:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=i(n(1)),r=i(n(126)),s=i(n(31));function i(e){return e&&e.__esModule?e:{default:e}}var l=(0,r.default)({}),c=l.Provider,u=l.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,r=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["components"]);return o.default.createElement(u,null,(function(t){return o.default.createElement(e,a({components:n||t},r))}))}};var m=function(e){var t=e.components,n=e.children;return o.default.createElement(c,{value:t},n)};m.propTypes={components:s.default.object.isRequired,children:s.default.element.isRequired},t.default=m},122:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},123:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(124);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return r(a).default}});var o=n(121);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},124:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(1),s=c(r),i=c(n(125)),l=n(121);function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p={inlineCode:"code",wrapper:"div"},d=function(e){function t(){return u(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,r=void 0===o?{}:o,l=e.children,c=e.components,u=void 0===c?{}:c,m=e.Layout,d=e.layoutProps,h=u[n+"."+t]||u[t]||p[t]||t;return m?((0,i.default)(this,m),s.default.createElement(m,a({components:u},d),s.default.createElement(h,r,l))):s.default.createElement(h,r,l)}}]),t}(r.Component);t.default=(0,l.withMDXComponents)(d)},125:function(e,t,n){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,s=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,u=c&&c(Object);e.exports=function e(t,n,m){if("string"!==typeof n){if(u){var p=c(n);p&&p!==u&&e(t,p,m)}var d=s(n);i&&(d=d.concat(i(n)));for(var h=0;h<d.length;++h){var f=d[h];if(!a[f]&&!o[f]&&(!m||!m[f])){var g=l(n,f);try{r(t,f,g)}catch(w){}}}return t}return t}},126:function(e,t,n){"use strict";t.__esModule=!0;var a=r(n(1)),o=r(n(127));function r(e){return e&&e.__esModule?e:{default:e}}t.default=a.default.createContext||o.default,e.exports=t.default},127:function(e,t,n){"use strict";t.__esModule=!0;var a=n(1),o=(s(a),s(n(31))),r=s(n(128));s(n(129));function s(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,a){e=n,t.forEach((function(t){return t(e,a)}))}}}t.default=function(e,t){var n,s,m="__create-react-context-"+(0,r.default)()+"__",p=function(e){function n(){var t,a;i(this,n);for(var o=arguments.length,r=Array(o),s=0;s<o;s++)r[s]=arguments[s];return t=a=l(this,e.call.apply(e,[this].concat(r))),a.emitter=u(a.props.value),l(a,t)}return c(n,e),n.prototype.getChildContext=function(){var e;return(e={})[m]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,a=e.value,o=void 0;((r=n)===(s=a)?0!==r||1/r===1/s:r!==r&&s!==s)?o=0:(o="function"===typeof t?t(n,a):1073741823,0!==(o|=0)&&this.emitter.set(e.value,o))}var r,s},n.prototype.render=function(){return this.props.children},n}(a.Component);p.childContextTypes=((n={})[m]=o.default.object.isRequired,n);var d=function(t){function n(){var e,a;i(this,n);for(var o=arguments.length,r=Array(o),s=0;s<o;s++)r[s]=arguments[s];return e=a=l(this,t.call.apply(t,[this].concat(r))),a.state={value:a.getValue()},a.onUpdate=function(e,t){0!==((0|a.observedBits)&t)&&a.setState({value:a.getValue()})},l(a,e)}return c(n,t),n.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?1073741823:t},n.prototype.componentDidMount=function(){this.context[m]&&this.context[m].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?1073741823:e},n.prototype.componentWillUnmount=function(){this.context[m]&&this.context[m].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[m]?this.context[m].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(a.Component);return d.contextTypes=((s={})[m]=o.default.object,s),{Provider:p,Consumer:d}},e.exports=t.default},128:function(e,t,n){"use strict";(function(t){var n="__global_unique_id__";e.exports=function(){return t[n]=(t[n]||0)+1}}).call(this,n(83))},129:function(e,t,n){"use strict";var a=n(130);e.exports=a},130:function(e,t,n){"use strict";function a(e){return function(){return e}}var o=function(){};o.thatReturns=a,o.thatReturnsFalse=a(!1),o.thatReturnsTrue=a(!0),o.thatReturnsNull=a(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},132:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.r(t),n.d(t,"default",(function(){return a}))},178:function(e,t,n){"use strict";var a=n(122);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.S3Repo=t.EC2Repo=t.awsIAMPolicy=t.awsIAMRole=t.apacheHTTP=void 0;var o=a(n(132)),r=a(n(1)),s=n(123),i=n(2);t.apacheHTTP="https://httpd.apache.org/";const l="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html";t.awsIAMRole=l;const c="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html";t.awsIAMPolicy=c;const u="https://github.com/arthurdayton116/aws-terraform/tree/main/terraform_ec2";t.EC2Repo=u;const m="https://github.com/arthurdayton116/aws-terraform/tree/main/terraform_s3";t.S3Repo=m;t.default=e=>{let t=e.components,n=(0,o.default)(e,["components"]);return r.default.createElement(s.MDXTag,{name:"wrapper",components:t},r.default.createElement(s.MDXTag,{name:"h4",components:t},"Wait what?"),r.default.createElement(s.MDXTag,{name:"p",components:t},"So I needed a way to demonstrate deploying EC2 instances but was looking for a real world problem to solve.  Turns out that my kids are addicted to Minecraft despite all efforts to insulate them from the insidious lure of gaming (read mom)."),r.default.createElement("br",null),r.default.createElement(s.MDXTag,{name:"p",components:t},"I personally am not a gamer.  I'd love to give you some high minded declaration of why I don't play but imply that if I did I would obviously be better than you but the truth is I've always just sucked at video games and never had enough time outside my other time wasting activities (read blogging) to get better at it."),r.default.createElement("br",null),r.default.createElement(s.MDXTag,{name:"p",components:t},"Of course now that the kids have tasted the forbidden fruit they want to play online with each other and their friends (Distributed Access).   We (read mom) want to fence in the area where they play for obvious reasons so why doesn't dad help them set up an automatically deployed (Terraform and AWS) server that saves their world (Persisted State) in between sessions."),r.default.createElement("br",null),r.default.createElement(s.MDXTag,{name:"p",components:t},"You can purchase a server online from about 5000 different places and be done with it but it isn't exactly cheap for anything with any amount of horsepower and besides this is my chance to look cool to my kids by being a hacker (my kids define hacker as anything cool you can do with a computer that not everyone knows how to do - sometimes I tail log files just to make them think I'm hacking into government computers). So in the spirit of all who enjoy watching people change the gear ratio on a riding lawnmower to make it go 40mph I thought why can't I contribute to my children's delinquency by giving them a variably sized Minecraft server that they can fire up whenever they want (read mom lets them cause they were good - bribery is a foundational tenet of parenting).  This way we can maximize the size of the server when we need it (Ephemeral Workload) and minimize the cost of providing it (duh)."),r.default.createElement("br",null),r.default.createElement(s.MDXTag,{name:"p",components:t},"Ok so we have a problem to solve let's list some requirements and plan out an architecture:"),r.default.createElement(s.MDXTag,{name:"ul",components:t},r.default.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},"We are obviously going to need some compute so we'll use EC2 ami with Ubuntu which will require a ",r.default.createElement(i.Link,{href:"post/2",target:"_blank"},"VPC"),"."),r.default.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},"We want to be secure so we need a way to feed in an arbitrary list of allowed IP addresses that can access the instance (Route table and Security Group)."),r.default.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},"We need to install software and have it start up automatically (User Data and Systemctl)."),r.default.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},"We need to preserve game state from previous sessions (S3)."),r.default.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},"We need a simple way to distribute access to our server across the planet (AWS)."),r.default.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},"To prove our servers are alive and accessible we will install an ",r.default.createElement(i.Link,{href:"https://httpd.apache.org/",target:"_blank"},"Apache HTTP Server"),"."),r.default.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},"Seeing as we are already here let's show how a private subnet works with a NAT gateway (all the Minecraft stuff works fine without these parts).")),r.default.createElement("br",null),r.default.createElement(s.MDXTag,{name:"p",components:t},"This diagram shows our basic architecture and gives us a way to break down our components into distinct stories for implementation."),r.default.createElement(i.Image,{p:4,verticalAlign:"middle",src:n.images.ARCH_DRAWING_IMAGE}),r.default.createElement("br",null),"My previous post on creating a VPC gives us the outer portion of the diagram so if my turn off the VPC layer we can see what we need to implement here:",r.default.createElement("br",null),r.default.createElement(i.Image,{p:4,verticalAlign:"middle",src:n.images.ARCH_EC2_DRAWING_IMAGE}),r.default.createElement("br",null),r.default.createElement(s.MDXTag,{name:"p",components:t},"I'll assume you can handle the implementation of the kids on your own and I won't being doing any posting on that as long as I'm employed in the corporate world so lets start with the S3 bucket."),r.default.createElement("br",null),r.default.createElement(s.MDXTag,{name:"h4",components:t},"Create S3 Bucket"),r.default.createElement(i.Link,{p:4,href:m,target:"_blank"},"Code located here"),r.default.createElement("br",null),r.default.createElement(s.MDXTag,{name:"p",components:t},"Creating one is simple with the aws_s3_bucket resource.  We will set ours to be private and not to destroy if it has contents:"),r.default.createElement(s.MDXTag,{name:"pre",components:t},r.default.createElement(s.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-json",metaString:""}},'resource "aws_s3_bucket" "mc" {\n  bucket = "${local.resource_prefix}-bucket"\n  acl    = "private"\n  force_destroy = false\n  tags = merge(\n  local.base_tags,\n  {\n    Name = "${local.resource_prefix}-mc-s3"\n    directory = basename(path.cwd)\n  },\n  )\n}\n')),r.default.createElement("br",null),r.default.createElement(s.MDXTag,{name:"p",components:t},"The harder part is creating the role and permission we need to access it with our EC2 instance."),r.default.createElement("br",null),r.default.createElement(s.MDXTag,{name:"h4",components:t},"Create role and policy to access bucket with EC2 instance"),r.default.createElement(s.MDXTag,{name:"p",components:t},"From the AWS Docs ",r.default.createElement(i.Link,{href:l,target:"_blank"},"IAM roles")),r.default.createElement(s.MDXTag,{name:"hr",components:t}),r.default.createElement(s.MDXTag,{name:"p",components:t},"An IAM role is an IAM identity that you can create in your account that has specific permissions. An IAM role is similar to an IAM user, in that it is an AWS identity with permission policies that determine what the identity can and cannot do in AWS. However, instead of being uniquely associated with one person, a role is intended to be assumable by anyone who needs it. Also, a role does not have standard long-term credentials such as a password or access keys associated with it. Instead, when you assume a role, it provides you with temporary security credentials for your role session."),r.default.createElement(s.MDXTag,{name:"hr",components:t}),r.default.createElement("br",null),r.default.createElement(s.MDXTag,{name:"p",components:t},"From the AWS Docs ",r.default.createElement(i.Link,{href:c,target:"_blank"},"Policies and permissions in IAM")),r.default.createElement(s.MDXTag,{name:"hr",components:t}),r.default.createElement(s.MDXTag,{name:"p",components:t},"You manage access in AWS by creating policies and attaching them to IAM identities (users, groups of users, or roles) or AWS resources. A policy is an object in AWS that, when associated with an identity or resource, defines their permissions. AWS evaluates these policies when an IAM principal (user or role) makes a request. Permissions in the policies determine whether the request is allowed or denied. Most policies are stored in AWS as JSON documents. AWS supports six types of policies: identity-based policies, resource-based policies, permissions boundaries, Organizations SCPs, ACLs, and session policies."),r.default.createElement(s.MDXTag,{name:"hr",components:t}),r.default.createElement("br",null),r.default.createElement(s.MDXTag,{name:"p",components:t},"These descriptions explain that a role is an identity and a policy is a set of permissions.  Once we associate a role and a policy we can then grant that role to a user, or in our case a service, and we have the given our service permission to do something."),r.default.createElement("br",null),r.default.createElement(s.MDXTag,{name:"p",components:t},"First we define a role for the EC2 instance we plan to create that will allow the EC2 service to access resources in our account:"),r.default.createElement(s.MDXTag,{name:"pre",components:t},r.default.createElement(s.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-json",metaString:""}},'resource "aws_iam_role" "ec2_s3_access_role" {\n  name = "${local.resource_prefix}-s3-role"\n  assume_role_policy = jsonencode({\n    Version = "2012-10-17"\n    Statement = [\n      {\n        Action = "sts:AssumeRole"\n        Effect = "Allow"\n        Sid = ""\n        Principal = {\n          Service = "ec2.amazonaws.com"\n        }\n      },\n    ]\n  })\n\n  tags = merge(\n  local.base_tags,\n  {\n    Name = "${local.resource_prefix}-s3-role"\n    directory = basename(path.cwd)\n  },\n  )\n\n}\n')),r.default.createElement(s.MDXTag,{name:"p",components:t},"Next we need to create a policy that grants permission to do whatever to the specific bucket we create:"),r.default.createElement(s.MDXTag,{name:"pre",components:t},r.default.createElement(s.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-json",metaString:""}},'resource "aws_iam_policy" "s3_policy" {\n    name        = "${local.resource_prefix}-s3-world-bucket"\n    description = "Policy for access to the world bucket"\n    policy      = jsonencode({\n      Version = "2012-10-17"\n      Statement = [{\n        Effect = "Allow"\n        Action = "s3:*"\n        Resource =  aws_s3_bucket.mc.arn\n      }]\n    })\n  }\n')),r.default.createElement(s.MDXTag,{name:"p",components:t},"Then the policy needs to be attached to the role:"),r.default.createElement(s.MDXTag,{name:"pre",components:t},r.default.createElement(s.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-json",metaString:""}},'resource "aws_iam_policy_attachment" "s3_policy_attach" {\n  name       = "${local.resource_prefix}-s3-policy-attachment"\n  roles      = [aws_iam_role.ec2_s3_access_role.name]\n  policy_arn = aws_iam_policy.s3_policy.arn\n}\n')),r.default.createElement(s.MDXTag,{name:"p",components:t},"And because we are doing this prgramttically via Terraform we need to create an instance profile that our EC2 instance will use to assume our new role:"),r.default.createElement(s.MDXTag,{name:"pre",components:t},r.default.createElement(s.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-json",metaString:""}},'resource "aws_iam_instance_profile" "ec2_profile" {\n  name  = "${local.resource_prefix}-ec2-profile"\n  role = aws_iam_role.ec2_s3_access_role.name\n}\n')),r.default.createElement(s.MDXTag,{name:"p",components:t},"Once we have deployed them we can see our role and policy in the console"),r.default.createElement(i.Image,{p:4,verticalAlign:"middle",src:n.images.ROLE_POLICY_IMAGE}),r.default.createElement(i.Image,{p:4,verticalAlign:"middle",src:n.images.TRUST_RELATIONSHIP_IMAGE}),r.default.createElement(i.Image,{p:4,verticalAlign:"middle",src:n.images.POLICY_ROLE_IMAGE}),r.default.createElement(s.MDXTag,{name:"p",components:t},"There's a lot of meat on that bone but this gives us what we need to move on to creating our EC2 instances.  At this point I realize this is going to be a long post but we can't stop now."),r.default.createElement("br",null),r.default.createElement(s.MDXTag,{name:"h4",components:t},"Create EC2 instances"),r.default.createElement(i.Link,{p:4,href:u,target:"_blank"},"Code located here"),r.default.createElement(s.MDXTag,{name:"p",components:t},"This part is easy too right up to the point it's not.  Making the instances is simple and most of the pain lies in the scripts that get executed upon creation and the systemd service that is responsible for managing the fetching and storage of our world directory."),r.default.createElement("br",null),r.default.createElement(s.MDXTag,{name:"p",components:t},"A lot of stuff comes together in the definition of our public EC2 instance that will run our minecraft server.  This image shows the various parts:"),r.default.createElement(i.Image,{p:4,verticalAlign:"middle",src:n.images.WEBSERVER_IMAGE}),r.default.createElement(s.MDXTag,{name:"p",components:t},"The file provisioner gives us a way to move our Minecraft.jar file and the service template we will use to sync our instance with our S3 bucket."),r.default.createElement("br",null),r.default.createElement(s.MDXTag,{name:"p",components:t},"The instance profile gives our EC2 instance the permissions it needs to manage our S3 bucket. The part that ties the whole thing together is the user_data attribute which gives us a means to define a script that will execute upon the creation of our EC2 instance."),r.default.createElement("br",null),r.default.createElement(s.MDXTag,{name:"p",components:t},"There is a pile of stuff going on here but it's all pretty self explanatory:"),r.default.createElement("br",null),r.default.createElement(s.MDXTag,{name:"pre",components:t},r.default.createElement(s.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash",metaString:""}},'    #!/bin/sh\n\n    # check logs\n    # /var/log/cloud-init.log and\n    # /var/log/cloud-init-output.log\n\n    ### Updates and installs\n    sudo apt-get update -y\n    sudo apt-get install wget screen default-jdk nmap -y\n    sudo apt install awscli -y\n\n\n    ### Create directories for minecraft\n    sudo mkdir /opt/ubuntu\n    sudo mkdir /opt/ubuntu/willmc\n    sudo chown -R ubuntu:ubuntu /opt/ubuntu/willmc/\n\n    ### Check if our bucket has anything in it\n    list=$(aws s3 ls s3://sample-company-bucket/mcBackup/)\n\n    ### If it does sync it to our EC2 instance and delete any lock files else do first time setup\n    if echo $list |grep -wc "world/" ; then\n      aws s3 sync s3://sample-company-bucket/mcBackup /opt/ubuntu/willmc\n      sudo rm -f /opt/ubuntu/willmcworld/session.lock\n    else\n      ## Sets eula for minecraft\n      sudo bash -c "echo eula=true > /opt/ubuntu/willmc/eula.txt"\n      ## Copy minecraft jar to run directory\n      cp /home/ubuntu/mc_16_4_server.jar /opt/ubuntu/willmc/mc_16_4_server.jar\n    fi\n\n    ### Make sure Ubuntu user owns it\n    sudo chown -R ubuntu:ubuntu /opt/ubuntu/willmc/\n\n    ### Create shutdown script that will sync results of kiddies changes to their world back to S3\n    echo "aws s3 sync /opt/ubuntu/willmc s3://sample-company-bucket/mcBackup" > /opt/ubuntu/willmc/shutdown.sh\n    sudo chmod uga+x /opt/ubuntu/willmc/shutdown.sh\n\n    ### Make sure it is executable\n    chmod uga+x /opt/ubuntu/willmc/mc_16_4_server.jar\n\n    ### Create service for autostart of Minecraft server whenever instance starts/reboots\n    sudo cp /home/ubuntu/minecraft@.service /etc/systemd/system/minecraft@.service\n    sudo systemctl start minecraft@willmc\n    sudo systemctl status minecraft@willmc\n    sudo systemctl enable minecraft@willmc\n\n    ### Enable firewall and open ports for Minecraft, SSH and Apache\n    # https://wiki.ubuntu.com/UncomplicatedFirewall\n    sudo ufw enable\n    sudo ufw allow 25565/tcp\n    sudo ufw allow 22/tcp\n    sudo ufw allow 80/tcp\n\n    ### Install apache for endpoint check and narf some simple HTML into an index file\n    apt-get install -y apache2\n    service start apache2\n    chkconfig apache2 on\n    instanceid="$(curl -s -H "X-aws-ec2-metadata-token: $TOKEN" -v http://169.254.169.254/latest/meta-data/instance-id 2>/dev/null)"\n    echo "<html>" > /var/www/html/index.html\n    echo "<h1>Welcome to Apache Web Server</h1>" >> /var/www/html/index.html\n    echo "<h2>Created using Terraform</h2>" >> /var/www/html/index.html\n    echo "<h4>Instance ID=$instanceid</h4>" >> /var/www/html/index.html\n    echo "</html>" >> /var/www/html/index.html\n')),r.default.createElement("br",null),r.default.createElement(s.MDXTag,{name:"p",components:t},"The next piece of magic is the service template.  The two important parts are the ExecStart which tells it so start Minecraft when our server starts and the all important 4th ExecStop that says run that script that will sync your world back to S3 before we unceremoniously slaughter this here server."),r.default.createElement("br",null),r.default.createElement(i.Image,{p:4,verticalAlign:"middle",src:n.images.SERVICEFILE_IMAGE}),r.default.createElement("br",null),r.default.createElement(s.MDXTag,{name:"p",components:t},"After I watched my 8 year old rage quit Minecraft for life over apparently losing all his diamonds (whatever that means) and then have a several minutes long conversation with himself about how it's all right and it's just a video game and then proceed to start playing again I thought about turning on versioning for my S3 bucket to save him the pain of having to suffer the consequences of his actions.  But then I thought what kind of life lesson would I be teaching him?  If I make Minecraft have no consequences next thing you know he'll borrow $100g's for an Art History degree and expect me to pay off his student loans.  So suck it up little one life is hard and nobody cares how you feel and as survival mode makes abundantly clear ya gotta kill to eat. So go whack a golum or something and learn how to cheat on the internet like everyone else."),r.default.createElement("br",null),r.default.createElement(s.MDXTag,{name:"p",components:t},"Looking at our Terraform folder the last part that I'm really concerned with is limiting who can get to our server. So we define our security groups in the ec2_security_group.tf:"),r.default.createElement(i.Image,{p:4,verticalAlign:"middle",src:n.images.TF_FOLDER_IMAGE}),r.default.createElement(s.MDXTag,{name:"p",components:t},"If you are curious about what's bad about setting up ingress rules that have bits like this:"),r.default.createElement(s.MDXTag,{name:"pre",components:t},r.default.createElement(s.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-json",metaString:""}},'cidr_blocks = ["0.0.0.0/0"]\n')),r.default.createElement(s.MDXTag,{name:"p",components:t},"go ahead and give it a try for a day or two."),r.default.createElement("br",null),r.default.createElement(s.MDXTag,{name:"p",components:t},"For ours we will at least try and make it hard (you don't need 22 or 80 for Minecraft).  The chomp part should put your public ip in the cidr_blocks, if you are running everything local, and you can obviously put an array of whatever IP's you want in there:"),r.default.createElement(s.MDXTag,{name:"pre",components:t},r.default.createElement(s.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-json",metaString:""}},'resource "aws_security_group" "ec2_public" {\n  name   = "${local.resource_prefix}_ec2"\n  vpc_id = data.terraform_remote_state.vpc.outputs.vpc_id\n  ingress {\n    from_port   = 22\n    to_port     = 22\n    protocol    = "tcp"\n    cidr_blocks = ["${chomp(data.http.myip.body)}/32"]\n  }\n  ingress {\n    from_port   = 80\n    to_port     = 80\n    protocol    = "tcp"\n    cidr_blocks = ["${chomp(data.http.myip.body)}/32"]\n  }\n  ingress {\n    from_port   = 25565\n    to_port     = 25565\n    protocol    = "tcp"\n    cidr_blocks = ["${chomp(data.http.myip.body)}/32"]\n  }\n  egress {\n    from_port   = 0\n    to_port     = 0\n    protocol    = "-1"\n    cidr_blocks = ["0.0.0.0/0"]\n  }\n  tags = merge(\n    local.base_tags,\n    {\n      Name = "${local.resource_prefix}_ec2"\n    },\n  )\n}\n')),r.default.createElement("br",null),r.default.createElement(s.MDXTag,{name:"p",components:t},"So finally we are ready to deploy this thing and bask in the glory of our creation.  My 12 year old is convinced I'd have been done hours ago if I just read some stupid blog entry he found.  He's to young to understand why the person who wrote that is clearly an idiot and has no idea how to properly massively over engineer something."),r.default.createElement("br",null),"So assuming you have your VPC:",r.default.createElement(i.Image,{p:4,verticalAlign:"middle",src:n.images.VPC_OUTPUTS_IMAGE}),r.default.createElement(s.MDXTag,{name:"p",components:t},"and your S3 bucket deployed"),r.default.createElement(i.Image,{p:4,verticalAlign:"middle",src:n.images.S3_OUTPUTS_IMAGE}),r.default.createElement(s.MDXTag,{name:"p",components:t},"you should have the outputs stored in their respective state files that will allow us to successfully run terraform apply on our terraform_ec2 directory:"),r.default.createElement(s.MDXTag,{name:"pre",components:t},r.default.createElement(s.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-json",metaString:""}},'terraform apply -auto-approve\naws_key_pair.ec2key: Creating...\naws_security_group.ec2_private: Creating...\naws_security_group.ec2_public: Creating...\naws_key_pair.ec2key: Creation complete after 1s [id=sample-company_publicKey]\naws_security_group.ec2_private: Creation complete after 2s [id=sg-056c29f273b591cbc]\naws_instance.web2: Creating...\naws_security_group.ec2_public: Creation complete after 2s [id=sg-0bc194e10e0a1b1fe]\naws_instance.web: Creating...\naws_instance.web2: Still creating... [10s elapsed]\naws_instance.web: Still creating... [10s elapsed]\naws_instance.web: Provisioning with \'file\'...\naws_instance.web2: Still creating... [20s elapsed]\naws_instance.web: Still creating... [20s elapsed]\naws_instance.web2: Creation complete after 22s [id=i-0af98772d68da2ae2]\naws_instance.web: Still creating... [30s elapsed]\naws_instance.web: Provisioning with \'file\'...\naws_instance.web: Creation complete after 39s [id=i-071d7600670c59383]\naws_eip_association.eip_assoc: Creating...\naws_eip_association.eip_assoc: Creation complete after 1s [id=eipassoc-0768156bed17736c0]\n\nApply complete! Resources: 6 added, 0 changed, 0 destroyed.\n\nOutputs:\n\ncopy_private_key_to_ec2 = "scp -i ~/.ssh/id_rsa_ec2 ~/.ssh/id_rsa_ec2 ubuntu@44.239.221.41:~/.ssh/id_rsa_ec2"\ncurl_local_host = "curl http://localhost"\ncurl_private_host = "curl http://10.1.1.126"\nkey_id = "sample-company_publicKey"\nkey_name = "sample-company_publicKey"\nprivate_ssh_link = "ssh -i ~/.ssh/id_rsa_ec2 ubuntu@10.1.1.126"\npublic_ssh_link = "ssh -i ~/.ssh/id_rsa_ec2 ubuntu@44.239.221.41"\nwebserver_ip = "44.239.221.41"\nwebserver_link = "http://44.239.221.41"\n')),r.default.createElement("br",null),r.default.createElement(s.MDXTag,{name:"p",components:t},"The outputs should give us all the connection string we need to test it."),r.default.createElement("br",null),r.default.createElement(s.MDXTag,{name:"p",components:t},"The public ssh should get you right in to your public instance:"),r.default.createElement("br",null),r.default.createElement(i.Image,{p:4,verticalAlign:"middle",src:n.images.PUBLIC_LOGIN_IMAGE}),r.default.createElement("br",null),r.default.createElement(s.MDXTag,{name:"p",components:t},"the private one should fail from your local machine but work fine from within your public instance after you copy a private key to the public instance:"),r.default.createElement("br",null),r.default.createElement(i.Image,{p:4,verticalAlign:"middle",src:n.images.PRIVATE_FAIL_IMAGE}),r.default.createElement("br",null),r.default.createElement(i.Image,{p:4,verticalAlign:"middle",src:n.images.PUBLIC_KEYCOPY_IMAGE}),r.default.createElement(s.MDXTag,{name:"p",components:t},"Show outputs and connecting to instances"),r.default.createElement(s.MDXTag,{name:"p",components:t},"Show Minecraft running on computer"),r.default.createElement(s.MDXTag,{name:"p",components:t},"Show S3 bucket with captured file"),r.default.createElement("br",null))}}}]);
//# sourceMappingURL=156.7a23a976.chunk.js.map
OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "فشل مسح الارتباطات mappings",
    "Failed to delete the server configuration" : "تعذّر حذف ملف إعدادات الخادم",
    "Invalid configuration: Anonymous binding is not allowed." : "تكوين غير صالح: الربط المجهول Anonymous binding غير مسموح به.",
    "Valid configuration, connection established!" : "تكوين صالح، تمّ تأسيس الاتصال!",
    "Valid configuration, but binding failed. Please check the server settings and credentials." : "تكوين صالح، لكن فشل الربط binding. يرجى التحقّق من إعدادات الخادم وأذونات الدخول credentials.",
    "Invalid configuration. Please have a look at the logs for further details." : "تكوين غير صحيح. يرجى الرجوع إلي سجلات الحركات logs لمزيد من التفاصيل.",
    "No action specified" : "لم يتم تحديد أيّ إجراءٍ",
    "No configuration specified" : "لم يتم تحديد أيّ إعداداتٍ",
    "No data specified" : "لم يتم تحديد أيّ بياناتٍ",
    "Invalid data specified" : "البيانات المُحدّدة غير صالحة",
    " Could not set configuration %s" : "تعذّر تعيين الإعداد %s",
    "Action does not exist" : "الإجراء غير موجود",
    "Renewing …" : "التجديد جارٍ …",
    "Very weak password" : "كلمة المرور ضعيفة جدا",
    "Weak password" : "كلمة المرور ضعيفة",
    "So-so password" : "كلمة المرور مقبولة نوعاً ما",
    "Good password" : "كلمة المرور جيدة",
    "Strong password" : "كلمة المرور قوية",
    "The Base DN appears to be wrong" : "يبدو أن الاسم المميز الأساسي Base DN خاطئٌ",
    "Testing configuration…" : "إختبار التهيئة...",
    "Configuration incorrect" : "الإعدادات غير صحيحة",
    "Configuration incomplete" : "الإعدادات غير مكتملة",
    "Configuration OK" : "الإعدادات صحيحة",
    "Select groups" : "إختر المجموعات",
    "Select object classes" : "إختر أصناف الكائنات object classes",
    "Please check the credentials, they seem to be wrong." : "يرجى التحقق من حيثيّات الدخول credentials، يبدو أنها خاطئة.",
    "Please specify the port, it could not be auto-detected." : "يُرجى تحديد المنفذ port، حيث لا يمكن اكتشافه تلقائيا.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "تعذر اكتشاف الاسم المميز الأساسي Base DN تلقائيًا، يرجى مراجعة حيثيّات الدخول credentials، والمُضيف host، والمنفذ port.",
    "Could not detect Base DN, please enter it manually." : "تعذّر اكتشاف الاسم المميز الأساسي Base DN، يُرجى إدخاله يدويًا.",
    "{nthServer}. Server" : "{nthServer}. الخادم",
    "No object found in the given Base DN. Please revise." : "لم يتم العثور على أي كائن object في الاسم المميز الأساسي Base DN المحدد. يُرجي المُراجعة.",
    "More than 1,000 directory entries available." : "يُوجد أكثر من 1,000 مُدخل في الدليل directory entries.",
    "_{objectsFound} entry available within the provided Base DN_::_{objectsFound} entries available within the provided Base DN_" : ["{objectsFound} مدخلات متاحة من خلال الاسم المميز الأساسي المقدم","{objectsFound} مدخل متاح من خلال الاسم المميز الأساسي المقدم","{objectsFound} مدخلات متاحة من خلال الاسم المميز الأساسي المقدم","{objectsFound} مدخلات متاحة من خلال الاسم المميز الأساسي المقدم","{objectsFound} مدخلات متاحة من خلال الاسم المميز الأساسي المقدم","{objectsFound} مدخلات متاحة من خلال الاسم المميز الأساسي المقدم"],
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "حدث خطأ. يرجي التحقق من الاسم المميز الأساسي Base DN، وكذلك إعدادات الاتصال، و حيثيّات الدخول credentials.",
    "Do you really want to delete the current Server Configuration?" : "هل ترغب فعلاً في حذف إعدادات الخادم الحالي؟",
    "Confirm Deletion" : "تأكيد الحذف",
    "Mappings cleared successfully!" : "تم مسح الارتباطات mappings بنجاح!",
    "Error while clearing the mappings." : "خطأ أثناء مسح الارتباطات mappings.",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "الربط المجهول Anonymous bind غير مسموح به. يرجى إدخال الاسم المميز للمستخدم User DN، وكلمة المرور.",
    "LDAP Operations error. Anonymous bind might not be allowed." : "خطأ في عمليات LDAP. قد لا يكون مسموحاُ بالربط المجهول Anonymous bind.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "فشل الحفظ. يرجى التأكد من أن قاعدة البيانات قيد التشغيل. أعد التحميل قبل المتابعة.",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "تفعيل الوضع سوف ينتج عنه تمكين استعلامات بروتوكولLDAP التلقائية. وقد يستغرق الأمر بعض الوقت بناء على حجم LDAP خاصتك. هل ما زلت تريد تفعيل الوضع؟",
    "Mode switch" : "تبديل النمط",
    "Select attributes" : "اختر الخصائص",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command-line validation): <br/>" : "لم يتم العثور على المستخدم. يرجى التحقق من تحديدات تسجيل الدخول واسم المستخدم الخاصين بك. عامل التصفية الفعال (للنسخ واللصق للتحقق من صحة سطر الأوامر):<br/>",
    "User found and settings verified." : "تم العثور على المستخدم وتم التحقق من الإعدادات.",
    "Consider narrowing your search, as it encompassed many users, only the first one of whom will be able to log in." : "ضع في اعتبارك تضييق نطاق البحث، لأنه يشمل مستخدمين كُثْرٌ، ولن يتمكن سوى أول واحد منهم من تسجيل الدخول.",
    "An unspecified error occurred. Please check log and settings." : "حدث خطأ غير محدد. يرجى التحقق من السجل والإعدادات.",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "فلتر البحث غير صالح؛ ربما بسبب مشكلات في بناء الجملة مثل عدم تساوي عدد الأقواس المفتوحة والمغلقة. يرجي المراجعة.",
    "A connection error to LDAP/AD occurred. Please check host, port and credentials." : "حدث خطأ في الاتصال بـ LDAP/AD. يرجى التحقق من المضيف host، والمنفذ port، و حيثيّات الدخول credentials.",
    "The \"%uid\" placeholder is missing. It will be replaced with the login name when querying LDAP/AD." : "العنصر النائب placeholder ـ \"%u مُعرّف\". سيتم استبداله باسم دخول عند الاستعلام من LDAP/AD.",
    "Please provide a login name to test against" : "يرجى تقديم اسم تسجيل الدخول لاختباره",
    "The group box was disabled, because the LDAP/AD server does not support memberOf." : "تم تعطيل مربع المجموعة؛ لأن خادم LDAP/AD لا يدعم خاصّيّة \"عضوٌ في\" memberOf.",
    "Password change rejected. Hint: " : "تمّ رفض تغيير كلمة المرور. إرشادُ:",
    "Please login with the new password" : "الرجاء تسجيل الدخول باستخدام كلمة المرور الجديدة",
    "LDAP User backend" : "خلفية المستخدمين User backend من LDAP ",
    "Your password will expire tomorrow." : "كلمة مرورك تنتهي صلاحيتها غداً.",
    "Your password will expire today." : "كلمة مرورك تنتهي صلاحيتها اليوم.",
    "_Your password will expire within %n day._::_Your password will expire within %n days._" : ["سوف تنتهي صلاحية كلمة المرور الخاصة بك خلال %n أيام.","سوف تنتهي صلاحية كلمة المرور الخاصة بك خلال %nيوم.","سوف تنتهي صلاحية كلمة المرور الخاصة بك خلال %nأيام.","سوف تنتهي صلاحية كلمة المرور الخاصة بك خلال %nأيام.","سوف تنتهي صلاحية كلمة المرور الخاصة بك خلال %nأيام.","سوف تنتهي صلاحية كلمة المرور الخاصة بك خلال %nأيام."],
    "LDAP/AD integration" : "التكامل مع LDAP/AD ",
    "LDAP Connection" : "الاتصال بدليل المستخدِمين LDAP ",
    "_Binding failed for this LDAP configuration: %s_::_Binding failed for %n LDAP configurations: %s_" : ["فشل ارتباط %n مع تكوينات LDAP دليل المستخدمين: %s","فشل ارتباط %s مع تكوين دليل المستخدمين LDAP هذا.","فشل ارتباط %n مع تكوينات LDAP دليل المستخدمين: %s","فشل ارتباط %n مع تكوينات LDAP دليل المستخدمين: %s","فشل ارتباط %n مع تكوينات LDAP دليل المستخدمين: %s","فشل ارتباط %n مع تكوينات LDAP دليل المستخدمين: %s"],
    "_Searching failed for this LDAP configuration: %s_::_Searching failed for %n LDAP configurations: %s_" : ["فشل البحث عن %n تكوينات LDAP دليل المستخدمين: %s","فشل البحث عن تكوينات LDAP دليل المستخدمين: %s","فشل البحث عن %n تكوينات LDAP دليل المستخدمين: %s","فشل البحث عن %n تكوينات LDAP دليل المستخدمين: %s","فشل البحث عن %n تكوينات LDAP دليل المستخدمين: %s","فشل البحث عن %n تكوينات LDAP دليل المستخدمين: %s"],
    "_There is an inactive LDAP configuration: %s_::_There are %n inactive LDAP configurations: %s_" : ["توجد %n تكوينات دليل مستخدمين LDAP غير نشطة:%s","بوجد تكوين. لدليل مستخدمين LDAP غير نشط: %s","توجد %n تكوينات دليل مستخدمين LDAP غير نشطة: %s","توجد %n تكوينات دليل مستخدمين LDAP غير نشطة: %s","توجد %n تكوينات دليل مستخدمين LDAP غير نشطة: %s","توجد %n تكوينات دليل مستخدمين LDAP غير نشطة: %s"],
    "_Binding and searching works on the configured LDAP connection (%s)_::_Binding and searching works on all of the %n configured LDAP connections (%s)_" : ["الارتباط و البحث يعمل كما يجب في كل التوصيلات الـ %n لأدلة المستخدمين LDAP المُكوَّنة (%s)","الارتباط و البحث يعمل كما يجب في توصيلة دليل المستخدمين المُكوَّنة (%s)","الارتباط و البحث يعمل كما يجب في كل التوصيلات الـ %n لأدلة المستخدمين LDAP المُكوَّنة (%s)","الارتباط و البحث يعمل كما يجب في كل التوصيلات الـ%n لأدلة المستخدمين LDAP المُكوَّنة (%s)","الارتباط و البحث يعمل كما يجب في كل التوصيلات الـ%n لأدلة المستخدمين LDAP المُكوَّنة (%s)","الارتباط و البحث يعمل كما يجب في كل التوصيلات الـ %n لأدلة المستخدمين LDAP المُكوَّنة (%s)"],
    "Invalid LDAP UUIDs" : "مُعرِّفات UUID الخاصة بـ LDAP غير صحيحة",
    "None found" : "لم يُمكن العثور على أي شيء",
    "Invalid UUIDs of LDAP accounts or groups have been found. Please review your \"Override UUID detection\" settings in the Expert part of the LDAP configuration and use \"occ ldap:update-uuid\" to update them." : "تم العثور على مُعرِّفات UUID غير صالحة لحسابات أو مجموعات LDAP. الرجاء مراجعة الإعداد \"تجاوز اكتشاف UUID ـ Override UUID detection\" في الجزء الخبير من تكوين LDAP  ثم اعطِ الأمر السطري: \"occ ldap:update-uuid\" لتحديثها",
    "_%n group found_::_%n groups found_" : ["تم العثور على %n مجموعات","تم العثور على %n مجموعة","تم العثور على %n مجموعات","تم العثور على %n مجموعات","تم العثور على %n مجموعات","تم العثور على %n مجموعات"],
    "> 1000 groups found" : "> 1000 مجموعة موجودة",
    "> 1000 users found" : "> 1000 مستخدِم موجود",
    "_%n user found_::_%n users found_" : ["تم العثور على %n مستخدمين","تم العثور على %n مستخدم","تم العثور على %n مستخدمين","تم العثور على %n مستخدمين","تم العثور على %n مستخدمين","تم العثور على %n مستخدمين"],
    "Could not detect user display name attribute. Please specify it yourself in advanced LDAP settings." : "تعذر اكتشاف خاصّية الاسم المعروض للمستخدم user display name attribute. يرجى تحديدها بنفسك في الإعدادات المتقدمة لخادم LDAP.",
    "Could not find the desired feature" : "تعذر العثور على الميزة المطلوبة",
    "Invalid Host" : "مُضيف غير صالح",
    "LDAP user and group backend" : "خلفية المستخدمين و المجموعات من LDAP",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory." : "يتيح هذا التطبيق للمشرفين توصيل نكست كلاود بدليل المستخدمين المستند إلى LDAP.",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory for authentication and provisioning users, groups and user attributes. Admins can configure this application to connect to one or more LDAP directories or Active Directories via an LDAP interface. Attributes such as user quota, email, avatar pictures, group memberships and more can be pulled into Nextcloud from a directory with the appropriate queries and filters.\n\nA user logs into Nextcloud with their LDAP or AD credentials, and is granted access based on an authentication request handled by the LDAP or AD server. Nextcloud does not store LDAP or AD passwords, rather these credentials are used to authenticate a user and then Nextcloud uses a session for the user ID. More information is available in the LDAP User and Group Backend documentation." : "يتيح هذا التطبيق للمشرفين توصيل نكست كلاود بدليل المستخدمين المستنِد إلى LDAP للمصادقة و توفير المستخدمين users، والمجموعات groups، و سمات المستخدمين user attributes. \nيمكن للمشرفين تكوين هذا التطبيق للاتصال بدليل LDAP واحد أو أكثر عبر واجهة LDAP. \nيمكن سحب سماتٍ مثل حصة المستخدم التخزينية، و البريد الإلكتروني، و التجسيدات الرمزية avatar، وعضوية المجموعات و غيرها إلى نكست كلاود باستخدام الاستعلامات والمرشحات المناسبة. \nيقوم المستخدم بتسجيل الدخول إلى نكست كلاود باستخدام حيثيات دخوله من LDAP أو AD، ويتم منحه حق الوصول بناءً على طلب المصادقة الذي تتم معالجته بواسطة خادوم LDAP أو AD. \nلا يقوم نكست كلاود بتخزين كلمات مرور LDAP أو AD، بل يستخدم حيثيّات المستخدم هذه للمصادقة ثم يستخدم مُعرّف الجلسة session كمُعرّف للمستخدم. \n\nيتوفر المزيد من المعلومات في وثائق مستخدم LDAP و Group Backend.",
    "Test Configuration" : "اختبر التكوين",
    "Help" : "مساعدة",
    "Groups meeting these criteria are available in %s:" : "المجموعات التي تلبي هذه المعايير متوفرة في %s:",
    "Only these object classes:" : "فئات هذه الكائنات فقط:",
    "Only from these groups:" : "فقط من هذه المجموعات:",
    "Search groups" : "مجموعات البحث",
    "Available groups" : "المجموعات المتاحة",
    "Selected groups" : "المجموعات المُحدّدة",
    "Edit LDAP Query" : "تحرير استعلام من خادم LDAP",
    "LDAP Filter:" : "فلتر LDAP:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "يحدد الفلتر أي مجموعات من LDAP سوف يكون لها حق الوصول إلى التطبيق %s.",
    "Verify settings and count the groups" : "تحقق من الإعدادات و احصر عدد المجموعات",
    "When logging in, %s will find the user based on the following attributes:" : "عند تسجيل الدخول، %sسوف تجد المستخدم بناءً على الخصائص التالية:",
    "LDAP/AD Username:" : "اسم مستخدم LDAP/AD ـ : ",
    "Allows login against the LDAP/AD username, which is either \"uid\" or \"sAMAccountName\" and will be detected." : "يسمح بتسجيل الدخول مقابل اسم مستخدم LDAP / AD ، والذي يكون إما \"uid\" أو \"sAMAccountName\" وسيتم اكتشافه.",
    "LDAP/AD Email Address:" : "عنوان البريد الالكتروني LDAP/AD ـ :",
    "Allows login against an email attribute. \"mail\" and \"mailPrimaryAddress\" allowed." : "يُسمح بتسجيل الدخول مقابل خاصّية البريد الإلكتروني. \"mail\" و \"mailPrimaryAddress\" مسموح بهما.",
    "Other Attributes:" : "خصائص أخري:",
    "Defines the filter to apply, when login is attempted. \"%%uid\" replaces the username in the login action. Example: \"uid=%%uid\"" : "حدد الفلتر الذي سيتم تطبيقه، عند محاولة تسجيل الدخول. يحل \"%%uid\"  محل اسم المستخدم في إجراء تسجيل الدخول. مثال: \"uid=%%uid\"",
    "Test Loginname" : "اختبار اسم تسجيل الدخول",
    "Attempts to receive a DN for the given loginname and the current login filter" : "محاولة تلقّي الاسم المميز DN لاسم تسجيل الدخول المحدد و فلتر تسجيل الدخول الحالي",
    "Verify settings" : "التحقُّق من الإعدادات",
    "%s. Server:" : "%s. خادم:",
    "Add a new configuration" : "إضافة تهيئة جديدة",
    "Copy current configuration into new directory binding" : "نسخ التهيئة الحالية إلى دليل جديد مرتبط",
    "Delete the current configuration" : "حذف التهيئة الحالية",
    "Host" : "المضيف",
    "You can omit the protocol, unless you require SSL. If so, start with ldaps://" : "يمكنك التغاضي عن البروتوكول، ما لم يكن SSL مطلوب. إذا كان الأمر كذلك، فابدأ بـ ldaps",
    "Port" : "المنفذ",
    "Detect Port" : "إكتشِف المنفذ",
    "User DN" : "الاسم المميز للمستخدم DN",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "الاسم المميز للعميل المستخدم DN الذي يجب الربط معه. على سبيل المثال، uid=agent,dc=example,dc=com. للوصول مجهول الهوية anonymous access، اترك خانتيْ الاسم المميز وكلمة المرور فارغتين.",
    "Password" : "كلمة المرور",
    "For anonymous access, leave DN and Password empty." : "للوصول المجهول anonymous access، اترك خانتيْ الاسم المميز وكلمة المرور فارغتين.",
    "Save Credentials" : "حفظ حيثيّات الدخول credentials",
    "One Base DN per line" : "اسم مميز واحد أساسي Base DN لكل سطر",
    "You can specify Base DN for users and groups in the Advanced tab" : "يمكنك تحديد الاسم المميز الأساسي Base DN للمستخدمين والمجموعات من علامة تبويب الإعدادات المتقدمة",
    "Detect Base DN" : "اكتشاف الاسم المميز الأساسي Base DN",
    "Test Base DN" : "إختبر الاسم المميز الأساسي  Base DN",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "يُلغي طلبات  LDAP التلقائية. يُفضّل استعماله في حالة الخوادم التي تخدم أعداداً كبيرة، ولكنه يتطلب بعض المعرفة فيما يخص بروتوكول LDAP.",
    "Manually enter LDAP filters (recommended for large directories)" : "الإدخال اليدوي لفلاتر بروتوكول LDAP (يُنصح به  في حالة الأدلة الكبيرة)",
    "Listing and searching for users is constrained by these criteria:" : "العرض والبحث عن المستخدمين مُقيّدٌ بهذه الشروط:",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "أكثر فئات الكائنات شيوعًا بالنسبة للمستخدمين هي:  الشخص التنظيمي \"organizationalPerson\" والشخص \"person\" والمستخدم \"user\"وinetOrgPerson. إذا لم تكن متأكدًا من فئة الكائن التي تريد تحديدها، فيرجى استشارة مسئول الدليل الخاص بك.",
    "The filter specifies which LDAP users shall have access to the %s instance." : "يُحدِّد الفلتر أيّ مستخدمي LDAP يمكنه الوصول إلى الخادم %s.",
    "Verify settings and count users" : "التّحقق من الإعدادات وعدد المستخدمين",
    "Saving" : "الحفظ جارٍ ...",
    "Back" : "رجوع",
    "Continue" : "متابعة",
    "Please renew your password." : "الرجاء تجديد كلمة مرورك.",
    "An internal error occurred." : "حدث خطأ داخلي.",
    "Please try again or contact your administrator." : "حاول مجددا أو تواصل مع مشرف النظام.",
    "Current password" : "كلمة المرور الحالية",
    "New password" : "كلمة المرور الجديدة",
    "Renew password" : "تجديد كلمة المرور",
    "Wrong password." : "كلمة مرور خاطئة.",
    "Cancel" : "إلغاء",
    "Server" : "خادم",
    "Users" : "المستخدمين",
    "Login Attributes" : "خصائص تسجيل الدخول",
    "Groups" : "مجموعات",
    "Expert" : "خبير",
    "Advanced" : "متقدمة",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>تحذير:</b> وِحدة PHP LDAP غير مُنصبّة؛ لذا فإن الخلفية لن تعمل. يرجى طلب تنصيبها من مُشرف النظام.",
    "Connection Settings" : "إعدادات الربط",
    "Configuration Active" : "الإعداد نشط",
    "When unchecked, this configuration will be skipped." : "عندما لا يتم تحديده، سوف يتم تخطي هذه التهيئة.",
    "Backup (Replica) Host" : "مضيف النسخ الاحتياطي (طِبقَ الأصل)",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "توفير مضيف احتياطي اختياري. يجب أن يكون نسخة طبق الأصل من خادم LDAP/AC.",
    "Backup (Replica) Port" : "منفذ النسخ الاحتياطي (طِبقَ الأصل)",
    "Disable Main Server" : "تعطيل الخادم الرئيسي",
    "Only connect to the replica server." : "متصل فقط بالخادم الاحتياطي.",
    "Turn off SSL certificate validation." : "إيقاف تشغيل التحقق من صحة شهادة SSL.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "لا يوصي به، استخدمه للاختبار فقط! إذا كان الاتصال يعمل فقط مع هذا الخيار، فقم باستيراد شهادة SSL لخادم LDAP في الخادم %s.",
    "Cache Time-To-Live" : "مدة صلاحية ذاكرة التخزين المؤقت cache",
    "in seconds. A change empties the cache." : "خلال ثوان. يؤدي التغيير إلى إفراغ ذاكرة التخزين المؤقت cache.",
    "Directory Settings" : "إعدادات الدليل",
    "User Display Name Field" : "حقل عرض اسم المستخدم",
    "The LDAP attribute to use to generate the user's display name." : "تستخدم سمة بروتوكول LDAP لتوليد اسم عرض المستخدم.",
    "2nd User Display Name Field" : "الحقل 2 لعرض اسم المستخدم ",
    "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«." : "اختياري. سمة LDAP سوف تُضاف إلى اسم العرض بين قوسين. و النتيجة ستكون كما في المثال: »John Doe (john.doe@example.org)«.",
    "Base User Tree" : "شجرة المستخدم الأساسي Base User Tree",
    "One User Base DN per line" : "اسم مميز أساسي User Base DN لمستخدم واحد لكل سطر",
    "User Search Attributes" : "خصائص بحث المستخدم",
    "Optional; one attribute per line" : "اختياري؛ سمة واحدة لكل سطر",
    "Disable users missing from LDAP" : "إيقاف المستخدمين غير الموجودين على LDAP",
    "When switched on, users imported from LDAP which are then missing will be disabled" : "عند التشغيل، سيتم تعطيل المستخدمين الذين تمّ استيرادهم من LDAP لكن تعذّر إيحادهم عندها",
    "Group Display Name Field" : "حقل عرض اسم المجموعة",
    "The LDAP attribute to use to generate the groups's display name." : "تستخدم خاصية بروتوكول LDAP لإنشاء اسماء عرض للمجموعات.",
    "Base Group Tree" : "شجرة المجموعة الأساسية Base Group Tree",
    "One Group Base DN per line" : "اسم مميز أساسي Group Base DN واحد للمجموعة لكل سطر",
    "Group Search Attributes" : "خصائص بحث المجموعات",
    "Group-Member association" : "ارتباط أعضاء المجموعة Group-Member association",
    "Dynamic Group Member URL" : "محدد موقع URL الديناميكي لعضو المجموعة ",
    "The LDAP attribute that on group objects contains an LDAP search URL that determines what objects belong to the group. (An empty setting disables dynamic group membership functionality.)" : "تحتوي خاصية بروتوكولLDAP الموجودة في كائنات المجموعة على عنوان بحث LDAP و الذي يحدد الكائنات التي تنتمي إلى المجموعة. (الإعداد الفارغ يتسبب في تعطيل وظيفة عضوية المجموعة الديناميكية.)",
    "Nested Groups" : "المجموعات المتداخلة",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "عند التشغيل، يتم دعم المجموعات التي تحتوي على مجموعات. (تعمل فقط إذا كان تحديد عضو المجموعة يحتوي على اسم مميز DN).",
    "Paging chunksize" : "حجم رزم الصفحات Paging chunksize",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "يتم استخدام حجم الرِّزمَة لعمليات البحث المقسمة إلى صفحات في LDAP؛ والتي قد تعطي نتائج ضخمة تبعاً لعدد المستخدمين و المجموعات. (الضبط علي 0 يؤدي إلى تعطيل هذا الأسلوب من البحث في تلك الحالات.)",
    "Enable LDAP password changes per user" : "تمكين تغيير كلمة المرور لكل مستخدم علي خادم LDAP ",
    "Allow LDAP users to change their password and allow Super Administrators and Group Administrators to change the password of their LDAP users. Only works when access control policies are configured accordingly on the LDAP server. As passwords are sent in plaintext to the LDAP server, transport encryption must be used and password hashing should be configured on the LDAP server." : "يتيح خادم بروتوكول LDAP للمستخدمين تغيير كلمة المرور الخاصة بهم والسماح للمشرفين المتميزين super admin ومسؤولي المجموعات بتغيير كلمة مرور مستخدمي الخادم. وتعمل هذه الخاصية عندما يتم تهيئة وضبط سياسات التحكم في الوصول على خادم LDAP وفقًا لذلك. وحيث أن كلمات المرور يتم إرسالها فى صورة نصٍّ عادي إلى خادم LDAP، فيجب استخدام تشفير النقل وضبط تجزئة كلمة المرور على خادم LDAP.",
    "(New password is sent as plain text to LDAP)" : "(يتم إرسال كلمة المرور الجديدة كنص عادي إلى خادم LDAP )",
    "Default password policy DN" : "سياسة الاسم المميز لكلمة المرورالافتراضية",
    "The DN of a default password policy that will be used for password expiry handling. Works only when LDAP password changes per user are enabled and is only supported by OpenLDAP. Leave empty to disable password expiry handling." : "سياسة الاسم المميز DN لكلمة المرورالافتراضية التي سيتم استخدامها لمعالجة انتهاء صلاحية كلمة المرور تعمل فقط عندما يتم تمكين تغيير كلمة مرور خادم LDAP لكل مستخدم ويكون مدعومًا فقط بواسطة OpenLDAP. H. أترُكه فارغًا لتعطيل معالجة انتهاء صلاحية كلمة المرور.",
    "Special Attributes" : "خصائص خاصة",
    "Quota Field" : "حقل الحِّصّة التخزينية",
    "Leave empty for user's default quota. Otherwise, specify an LDAP/AD attribute." : "اتركه فارغًا للحصة التخزينية الافتراضية للمستخدم. خلاف ذلك، حدد خاصّية خادم LDAP/AD.",
    "Quota Default" : "الحصة الافتراضية",
    "Override default quota for LDAP users who do not have a quota set in the Quota Field." : "تخطِّي الحصة الافتراضية لمستخدمي خادم LDAP الذين ليس لديهم حصة محددة في حقل الحصة.",
    "Email Field" : "خانة البريد الإلكتروني",
    "Set the user's email from their LDAP attribute. Leave it empty for default behaviour." : "قُم بتعيين البريد الإلكتروني للمستخدمين من خاصّية خادم LDAP الخاصة بهم. اتركه فارغًا للتصرُّف الافتراضي.",
    "User Home Folder Naming Rule" : "قاعدة تسمية المجلد الرئيسي للمستخدم User home folder",
    "Leave empty for username (default). Otherwise, specify an LDAP/AD attribute." : "أترُكه فارغًا لاسم المستخدم (افتراضي). خلاف ذلك، حدِّد خاصّية LDAP/AD.",
    "\"$home\" Placeholder Field" : "حقل العنصر النائب \"$home\"",
    "$home in an external storage configuration will be replaced with the value of the specified attribute" : "سيتم استبدال $home في تكوين وحدة التخزين الخارجية بقيمة الخاصّية المحددة",
    "User Profile Attributes" : "خصائص الملف الشخصي للمستخدِم",
    "Phone Field" : "خانة الهاتف",
    "User profile Phone will be set from the specified attribute" : "خانة الهاتف في الملف الشخصي للمستخدم سوف يتم تعيينها من الخاصّية المُحدّدة",
    "Website Field" : "خانة موقع الويب",
    "User profile Website will be set from the specified attribute" : "خانة موقع الوب في الملف الشخصي للمستخدِم سيتم تعيينها من الخاصّية المُحدّدة",
    "Address Field" : "خانة العنوان",
    "User profile Address will be set from the specified attribute" : "خانة العنوان في الملف الشخصي للمستخدم سيتم تعيينها من الخاصّية المُحدّدة",
    "Twitter Field" : "خانة حساب تويتر",
    "User profile Twitter will be set from the specified attribute" : "خانة حساب تويتر في الملف الشخصي للمستخدم سوف يتم تعيينها من الخاصّية المُحدّدة",
    "Fediverse Field" : "خانة حساب الـ\"فيدي فيرس\" Fediverse",
    "User profile Fediverse will be set from the specified attribute" : "خانة حساب الـ\"فيدي فيرس\" Fediverse في الملف الشخصي للمستخدم سوف يتم تعيينها من الخاصّية المُحدّدة",
    "Organisation Field" : "خانة المؤسسة organization",
    "User profile Organisation will be set from the specified attribute" : "خانة المنظمة organization في الملف الشخصي للمستخدم سوف يتم تعيينها من الخاصّية المُحدّدة",
    "Role Field" : "خانة الوظيفة role",
    "User profile Role will be set from the specified attribute" : "خانة الوظيفة role في الملف الشخصي للمستخدم سوف يتم تعيينها من الخاصّية المُحدّدة",
    "Headline Field" : "حقل العنوان",
    "User profile Headline will be set from the specified attribute" : "خانة العنوان في الملف الشخصي للمستخدم سوف يتم تعيينها من الخاصّية المُحدّدة",
    "Biography Field" : "خانة السيرة الذاتية biography",
    "User profile Biography will be set from the specified attribute" : "خانة السيرة الذاتية biography في الملف الشخصي للمستخدم سوف يتم تعيينها من الخاصّية المُحدّدة",
    "Birthdate Field" : "حقل تاريخ الميلاد",
    "User profile Date of birth will be set from the specified attribute" : "تاريخ الميلاد في ملف المستخدم سيتم ملؤه من الخانة المحددة",
    "Pronouns Field" : "حقل الضمائر",
    "User profile Pronouns will be set from the specified attribute" : "سيتم تعيين ضمائر ملف تعريف المستخدم من السمة المحددة",
    "Internal Username" : "اسم المستخدم الداخلي",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [a-zA-Z0-9_.@-]. Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all DAV services. With this setting, the default behavior can be overridden. Changes will have effect only on newly mapped (added) LDAP users. Leave it empty for default behavior." : "بشكل افتراضي، سيتم إنشاء اسم المستخدم الداخلي internal username من خاصّية المُغرّف المُميّز الشامل UUID. هذا يضمن أن اسم المستخدم فريدٌ ولا يلزمه أي تحويل في الأحرف. اسم المستخدم الداخلي مُقيّدٌ باستخدام هذه الأحرف فقط: [a-zA-Z0-9 _. @ -]. غير هذه الأحرف يقع استبدالها بما يقابلها من أحرف الآسكي ASCII أو - ببساطة - يقع حذفها. في حالة وقوع تضاربٍِ، سيتم إلحاق عدد بالاسم. \n\nيُستخدم هذا الاسم الداخلي لتعريف المستخدم داخليًا. وهو أيضًا الاسم الافتراضي للمجلد الرئيسي للمستخدم. و هو أيضًا جزء من عناوين remote URL القَصِيّة كما في خدمات DAV على سبيل المثال. باستخدام هذا الإعداد ، يمكن تجاوز السلوك الافتراضي. سيكون للتغييرات تأثير فقط على مستخدمي LDAP المُعيّنين حديثًا (المُضافين). أترُكه فارغًا للسلوك الافتراضي.",
    "Internal Username Attribute:" : "خاصّية اسم المستخدم الداخلي:",
    "Override UUID detection" : "تجاوُز اكتشاف المعرف الفريد الشامل UUID",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "بشكل افتراضي، يتم اكتشاف خاصية المعرف الفريد الشامل UUID تلقائيًا. ويتم استخدام هذه الخاصّية لتحديد مستخدمي ومجموعات LDAP علي نحو موثوق. أيضًا، سيتم إنشاء اسم المستخدم الداخلي بناءً على المعرف الفريد الشامل UUID إذا لم يتم تحديده أعلاه. يمكنك تجاوز الإعداد وتجاوز الخاصية حسب اختيارك. يجب عليك التأكد من إمكانية الوصول إلي الخاصية التي قمت باختيارها من قبل كل من المستخدمين والمجموعات وأنها فريدة. أترُكه فارغًا للوضع الافتراضي. تصبح التغييرات نافذة فقط على مستخدمي ومجموعات بروتوكول LDAP المُعيّنين حديثًا (المُضافين).",
    "UUID Attribute for Users:" : "خاصية المعرف الفريد الشامل للمستخدمين UUID:",
    "UUID Attribute for Groups:" : "خاصية المعرف الفريد الشامل للمجموعات UUID:",
    "Username-LDAP User Mapping" : "الربط بين اسم المستخدم في LDAP و المستخدم",
    "Usernames are used to store and assign metadata. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "تُستخدم أسماء المستخدمين لتخزين وتخصيص البيانات التعريف الوصفية. من أجل تحديد المستخدمين والتعرف عليهم بدقة، سيكون لكل مستخدم على خادوم LDAP اسم مستخدم داخلي. يتطلب هذا ربطاً mapping بين اسم المستخدم و مستخدم خادوم LDAP. يتم تعيين اسم المستخدم الذي تم إنشاؤه إلى المعرف الفريد الشامل \"UUID\" لمستخدم LDAP. بالإضافة إلى ذلك، يتم تخزين الاسم المميز DN مؤقتًا أيضًا لتقليل تفاعل LDAP، ولكنه لا يستخدم لتحديد الهوية. وعند تغير الاسم المميز يتم العثور على التغييرات. ويتم استخدام اسم المستخدم الداخلي في كل مكان. إلغاء الربط سيكون له آثار متبقية في كل مكان. إلغاء الربط يؤثر على جميع تكوينات LDAP! لا تقم مطلقًا بإلغاء الربط في بيئة الإنتاج. فقط في مرحلة الاختبار أو المرحلة التجريبية.",
    "Clear Username-LDAP User Mapping" : "إلغاء الربط بين اسم المستخدم في LDAP و المستخدم",
    "Clear Groupname-LDAP Group Mapping" : "إلغاء الربط بين اسم المجموعة في LDAP و المجموعة",
    "Invalid UUIDs of LDAP users or groups have been found. Please review your \"Override UUID detection\" settings in the Expert part of the LDAP configuration and use \"occ ldap:update-uuid\" to update them." : "المُعرّف الفريد الشامل UUID لمستخدمي و مجموعات LDAP الموجود غير صحيح. الرجاء مراجعة إعدادات \"تجاوز اكتشاف UUID\"ـ Override UUID detection  في القسم المتقدم Expert part من تكوين LDAP واستخدم \"occ ldap: update-uuid\" لتحديثها."
},
"nplurals=6; plural=n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5;");

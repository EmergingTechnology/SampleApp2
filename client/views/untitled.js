algorithm of synchronize user and patient context with other application:

if user login to application with valid user name and password
	login successfull
		if login is successfull
			application return a unique PathNetId of the user
				if PathNetId is returned 
					the application access CCOW context manager					
				else
					the application creates new user object in CCOM context and return loaded user
				endif
				if user select patient
					the application returns the PathNetID of that patient
				endif
else
	login failed
endif



if user login to application with valid user name and password
	login successfull 
	application is ready to communicate to context manager
	medical application loads which displays user name 
		While medical application shows user name as current login 
			CCOW context manager notify other application to log in as by same user
			if user access patient information
				notification is sent to CCOW context manager
					if user modify or update patient information 
						logs are captured in Audit Logs including which and where the data is accessed
							while CCOW provides two options to communication between components
								if Web (HTTP) mapping method or ActiveX mapping is used
									applications synchronize by querying the CCOW context manager
									determine the current context
									when they wish to update the context
								endif 
							endwhile
					endif
			endif
		endwhile
else 
	login failed
endif




CCOW provides two options for communication between components - a Web (HTTP) mapping, and an ActiveX mapping. 



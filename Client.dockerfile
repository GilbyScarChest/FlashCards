FROM mcr.microsoft.com/dotnet/core/sdk as build 
WORKDIR /aspnet    
COPY . /aspnet      
RUN dotnet build
RUN dotnet publish --no-restore -c Release -o out 

FROM mcr.microsoft.com/dotnet/core/aspnet
WORKDIR /dist
COPY --from=build /aspnet/out .
CMD [ "dotnet", "FlashCard.Client.dll" ]
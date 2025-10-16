"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import NavItems from "@/components/NavItems";
import { signOut } from "@/lib/actions/auth.actions";

const UserDropdown = ({ user }: {user: User}) => {
  const router = useRouter();

     const handleSignOut = async () => {
        await signOut();
        router.push("/sign-in");
    }



  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-3 text-gray-4 hover:text-yellow-500"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhIWFhUWGBUWFRIVFxUSFhUVFRUWFxYXFhUYHSggGBolGxYXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGi0lHx0tLS0tLS0tKy0rKy0rLS0tKy0tLS0tLS0tLS0tLSstLS0tLS0tLSstLS0rLS03LS0rLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwQBAgUGBwj/xAA8EAACAQIDBQUHAQcDBQAAAAAAAQIDEQQhMQUSQVFhBiJxgZETMlKhscHR8BQjQmKisuEHgvEVJENykv/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgQDBf/EAB8RAQEAAgMBAQEBAQAAAAAAAAABAhEDEiExQVETBP/aAAwDAQACEQMRAD8A7AADIAAAAAAAAAAANatRRTlJqMVm5N2SXVs8vtTtnTjdUFvv43dQ8uMvkF09UYclzPlOM29iKr71Zv8AlXdXpHI51RzfvT9W2F6vs6d9DJ8dw2KqQyi/nb05HVwfaPE05Xk5bvHSa9HkgdX00HmcL2si2t6DcXbvw684y/Pkd7B46nVV6c1LmtGvFPNBFgABAAAAAAAAAAAAAAAAAAAAAAAAAp7W2nTw1N1KjslklxlLhFdS4fPe3W25e1dGLW5FWllF3k1eWbzXBBY422tt1sTLenlH+GkvdiuvOXU5kE3rLLpp4dSNzlLN5R5v7I3hPhFPx4+bDcTRo2Xdi3fi9DX2bvfN+CVvUWlzj4Jo0q0WndScb8X7vm1oiDb2Es24t26r8G1KvF6TlB/C7NfM2w6lJuN7Tjnk73XNEdXC+1jJxX72K3pJW70Vq0lk8s8vHPhYi9gKyUv3mXD2i927031rHr9y/Vxk8POMl3ZX95NSi76Pwf64nBwWOtBNq7g84vSdNvNdM/7k9Tq42tCUFGHuSV4XzcJXzj4fezyuyq+h9ntsxxMHopxtvxWmejXQ6p8h7K7WdGvGV8m7SXOMrX8+K6n12Mk1dZp6MjFZAAQAAAAAAAAAAAAAAAAAAAAAQ4zEKnTnUlpCLk/JXPi+LlKpOU5e9JuTeubd/ufTO31dwwc7fxShF+Dld/Q+W/tG9wyLFjM27W1X1fiIwk/waOLzs8uZ2tidmqlfPSPNtmMrJ69McblfHJp0b65eaVvVlvC0al2lBzi8re98v8H03YXYmhTS3obz5yz+R6jD7Gpx92CXhkeN5v46J/z/ANr4jDZFbeTp05tLNZWkungTvs7i001SmtGnZ3TvfVdT7nDBRX8KLKoK2hn/AFya/wAcY/O2N2RVi3KVNq9793K9vkV4uUIWaas8r8z9E4nZ8ZKzin5Hgu2nZLejelHNcEnmbx5b+sZcM/HymnG7fifUuwm1fa0fZSVpUrJZt3hwbvxvl6HzmphZUpOMk1bVPI9B/p1O2LazzhP5NM9/rmsfTAAGAAAAAAAAAAAAAAAAAAAAAB5/t3hXUwVS38G7U8oO7+Vz5HTR9w2xT3sPWi+NOov6GfGcNT062K1I7PZ7ZPtZRUtD6tgMLGEUkrJHl+xmzXbfkrLh1fPwPWVcVTp+/JLocvJ7XdxSTF06JbpJnDw+38O3ZVY+p3cHiYT92SZ56r07RNFGzN7ITqRirt2BajdyCor6lfFdoaMNW+V7ZEMdt0ZNWlrnd5amtVjtHzn/AFA2Taq5pZPgc3/T2h/3Un8NOV/NxSPpHavZ6qUXJcFfo1Y8r2Kwm77aVs96MPS7f1R0cd8cvLNPUAA28AAAAAAAAAAAAAAAAAAAAABpXjeMlzTXyPj+Cwzc4xWraVvHI+wVasYq8nZZLnrkeQwnZ90sfCN7wadWMuaXDybRO0nj1wwt9/HssLhdymoxdrKyfW2px57Do7zdWbk3m7yu/E9C1kcfF7FUpKck5Wd915xb/mjozk367us0ovs/gJu1KrHe+GNWm3fnu71y7szBvDO2/JpfFk14mmD2DCOJ/aO/x/dZqm7u7uuW9na+pfrU3vvdtuv+DO0H/LfRdL2GdmvKnHjd+x6PBVHJZFfalO6zZPsmi4xG0qDlFoxPjdjzU6VDWrJKPOU4wT85NXOph8Bhd1bijZ6SjJSWfOSbRxtsbBVeEYZwcZXVSN5N5xl3nxzjF+R0qeyIWhu5Sje84pqU953lv8JJtt2ses8n142e/PF6Gz9ynOCbcWpWTztk9DzWw6dqbfxTk/p+D2lCPdszgYbAqnSV295yqbuXCMpa+SPTDKT68+Xjt+IwAezkAAAAAAAAAAAAAAAAAAAAAG9KCk0npe78F/kirVozxPdXuU2tPjkm/wCxGKik01FXbWS80VKWJTxU4q1lCCy4NK7T63bOa296+hhJOKO5RjmXo0b8CjCdrHTw8sjzr0lRvDcym4resl6cC/jZtRvFX6HJxm0nTivZ0XObfu3jTayve8v1mZrUtd7CQyJXZ5M52yNoOUe8t2Vs4XTs7aX0Ywu0pTlKFWhKnJZxe9GakvGLyfRmmbva48PnkSKkMPLmT3DNqBwsVKu64W4xlK/+5v7SLlSRxqM7yr8t6KXpBmvwl9csGZamDrfOAAEAAAAAAAAAAAAAAAAAAAdRxs7f8nDrTf7ZvNWvZPhfJa5fqx3VJrRnD2vTtWhK7d82+unkeNwu7XVjyy4zF6KMskXKNWyOZhq+8lyL1uB4V1YrFTGqKvJ2XA5+J2p7RONKO8+dlZeZpj8F7RWTs7ZPWz8OJXwex3FJTqykuSSh67qRZpP1pgJYqMdIb+Wd1kr53f64HdwmOnTgnVj5rvJeZUVHDp2e9frKf5LLwW9G9Ko4+PeXo9TbNjoYfGRmrxZY9oed2ThKlKVptS17yW7k3yO7FGaRirPI42BrXlV49/7I6GMrJK3HM4mBxMoqTjlvNt/JfY1jjbHnlnMbutq0bSa5Nmhlu5g6XHQABAAAAAAAAAAAAAAAAAAADm7apd1Tvbddn4P/ACdI1q01JOL0aafgxVl1XH2Xj7yzyvkl9T0VKqeCxMJ4aqpPOF2lpl0f65noMDtWMuPDTkcucfQwy8elpk8XY4mG2xDS+ZutqK97metb7RfxEHJ33E/qdDDyyslbocaG1Ve119yzDaCui9az2jqOInOyK9THxVrlLGbVjFa+Y1U7RV2hXd3fTPmQ0Y2ikRU6jqvftaOiXPqWDowmo4+XLdAAbeQAAAAAAAAAAAAAAAAAAAAAGtSainJuySbb6I2bPPdp9qQ9n7OE1JydpbrTslnnbyCybXcbTjVjdWaauuqeZ5HaWHqR70G4u3u2dnYv7A2pkqM3ZrKDejXw+KOviqKmrSRzZbld2MmWLwy2pK9p3jJc+vHqWMPtOqnwkss7/Y7OM2JvcE16+hzX2YlrBtdL3+pqZxi4Vv8A9Uqb2j187deR1MPtiVvd878fE59LstXetRL5nWwXZCH/AJJTn0vur+kvbadNIVtpt7qbqVHlGEFe365s9BsnZc2k67zee6tFyu+Jd2ZseFJWhCMVyS+pPtLGwoQ35eEYrWT5IW/xqYye1Hiq8VUVJe8oKVuFm2vX8mDy+zMTKWIU5vvTbvyzWSXTRHqD1k1HLn92AArAAAAAAAAAAAAAAAAACHE4qFNXnJL6+S1OJje0qWVNf7pfZBdO/OaSu2kubyRx8f2ipwygt9+kfU81itpub70pPx/BRq1+QamKXbG1atX35u3wrKK8vyU6a7qRFXVyaloGo23Tv7J25u2hWzjwnq1/7c/E4JtFmcsZW8crjfH0OgoTScWmnpbNE6wp4HAY6dJ3g/GL0Z7PY22Y1o8pLWL1XVc0c+WFxdOHJMnUo4XoXaVFI58tpU4+9OKtzaRwtp9pZT7mHyXGq1/Yn9WJLfi5WT67u2NuQod2PeqfCuHWT4fc8di8ROpJzqO8vklyS4IijZdXq2823zb4kc5XPfHHTlyz7ClbMt0drVKd25uS4RlmikyrWlnY2w9hs7bcKuT7suT0fgzqHz3D1N38HXwe1pRyTy+GWn68AzcXqwUsFtGFTL3Zcnx8HxLoZAAEAAAAAAM5W1NuU6OSe9P4VovF/Y8rjtsVKrzllyWgakevxu2aNLWab+GPefnyOBju005ZQW6ufH1PPtgNSRNVxkpO7fn/AMkEpX1M2MBWrZqSWFgrRxIqbtl6E7K1fKzAl3zZVCFK+hsofpZhViMzFHFXbaTtHWUefkIYVy1yXIYGmoTklna2iDKOpiHK7hHrd3efgb4Xa7WU15r8Fvd5WS5LN/goYvCXzWoHZpVVJXTujeR5nD150pdOMeDPRKqmlJaNXAVqm6ur0KSubVqt3f0XQi3mwqeDJLleKJEmEWqWIa6r9aHZ2fttxyl3l/Uvyeej4GyCae8w2KhU92SfTRryJjwlKrKOaf59Tt4Dbz0qK/8ANx/yGbi9ACOjWjNXi7okDIAAPmDlcI1RsHqyDW5kDJqZTDCgsZiGgMKJirRuSwRlhVWFDgWKVNLgbRJacbhltFlShFSnN5cNcy88kczAK+8+bAuqCfFv5fQKBKqVlqaxQEFainqhRhux3b5frIkmxO7yQVC8zKjYnp0LK7I495gbRN/aWE0QAW4zM7tysk2TRusgjLgZzNkjZAb4bFSg7xbR38Dt1Ssqis/iWnmjzriaMqae5/aIfHH/AOkZPF7zA0nVyImrYpK5NCkRtEYJpUzSUANLmUjDiEwN7G6VzVIlgBhRMG8jCQCMC1BWRDEzOpYCLF1LJkOyFk2+f2RpWk2b06P7tq9m75gX51L6GqiVcNB6vro/z+syarKwIwtSxCyRBCNsvU3rSyII8RWubYdWRDCNyxkkUJ5m8rJEKXE1qyzAsQqGZTRWnOyIt9gX4zJYq5zISZNGu0BeuR5N2K8cSzanK7CLO6DS7AHEpTtJdcjob5x5uztyZdUwqb22ZJBplWxZpZAZnTuQypljeDYEECVGzgYSA1ZlBo2igMWNKiN941lmBph6N2WoJcuL+ptRhZEMOXV/VhEzeXIhjG7b5aE1SORolZWCiRpW4I2ga2zIEImZLMzLIjcijabId1s3vcsUKIGtDBb2pYWFiiWLsZcbgaKlFcDNSEYq+7cbpvB5NBHOeMpXs426lqGGWTi8iDaOBU1krPgyjsPENSabysB3vYg09uAPJ1/efl9C3AAipqWhMgCjdGGAESIwwArCMgARs3o6mQEWyrh/u/qABPUIZmABmmIasADSoaSACpMOX4AAZQpAFRLIjhqYAGZ6Hm8B778/qAEdUABH/9k=" />
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-base font-medium text-gray-400">
              {user.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-gray-400">
        <DropdownMenuLabel>
          <div className="flex relative items-center gap-3 py-2">
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://avatars.githubusercontent.com/u/153423955?s=280&v=4" />
              <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-base font-medium text-gray-400">
                {user.name}
              </span>
              <span className="text-sm text-gray-500">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-600" />
        <DropdownMenuItem
          onClick={handleSignOut}
          className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer"
        >
          <LogOut className="h-4 w-4 mr-2 hidden sm:block" />
          Logout
        </DropdownMenuItem>
        <DropdownMenuSeparator className="hidden sm:block bg-gray-600" />
        <nav className="sm:hidden">
          <NavItems />
        </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default UserDropdown;

import myfitnesspal
import datetime

def main():
    #TODO extract to environment variable
    client = myfitnesspal.Client('steviehuh')
    today = datetime.datetime.now()
    day_info = client.get_date(today)
    print(day_info.water)

if __name__ == '__main__':
    main()


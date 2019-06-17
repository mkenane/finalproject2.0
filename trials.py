#run this model for:

# play wih number of subscribed users
# play with number of classes where we eat the cost per user
# play with different discount prices from vendor based on industrry
# how to deal premium not-included with subscripttion classes
# possible events/classes ot offer ron platofrm : art classes, concerts, wineries, seasonal events, foodie events, skill-learning classes, religious events,
     # ---> to gett full list of potetntial eventts look through evenbright, facebook eventts, coursehourse, feverup
# include non-subscription - one time purchase



"""


basic_scenario_dict = { {'users_demographic': {'creative': 0.50, 'alcoholic': 0.30,},

                   'subscription_models':    {'basic': 3, 'entertaminment': 5, 'high_roller': 10 },

                    'vendor_discount': { 'art_studio': 0.15, 'concert_venues': 0.20},

                    'vendor_acual_price': {'art_classes': 30, 'concerts': 20}



                    'premium classes' : {'avg_num_users' : x, }
                    }
    }





def create_new_scenario(art, numbers):

    new_scenario = {}

    return new_scenario


def run_profits_cost(scenario):

    art * vendor_cost

    #math math math

    return projection_model


new_sce = create_new_scenario('concert', 0.20)

new_projection = run_profits_cost(new_sce)

class User
class Classes
class Vendors
class Subscription


# relationships:

class Classes -- class Vendors
#many to many

class Classes -- class Users
#many to many

class Vendors -- class User
#many_to_many

class subscriptions -- class User
# one-to-one realtion




session - $25
session - $10
session - 15



# number classes per month
1, 3, 5 , 8

# subscripion price:
$30, 50, $100, $150


# cost

art - 35
lecture - $20
skill learning - 25
concert - $30
local gaming - 40
random / misc - 10

"""




# Revenue Model

#globals

users = ["social", "alc_distressor", "rounded_hobbist", "specific_skill", "artsy"]
pricing = {"basic":( 79.99, 5), "premium": (99.99, 8), "warrior": (179.99, 12)}

classes_catg = {"art": 25, "skills": 20, "forfun": 25, "drinking_activity": 15}




# sample demogs
users_demogr_1 = {"social": 0.50, "alc": 0.10, "rounded_hobbist": 0.15, "specific_skill": 0.05, "artsy": 0.20}

users_demogr_2 = {"social": 0.60, "alc": 0.20, "rounded_hobbist": 0.05, "specific_skill": 0.05, "artsy": 0.10}

# high cost
users_demogr_3 = {"social": 0.70,  "rounded_hobbist": 0.05,  "artsy": 0.25}

# cheap cost
users_demogr_4 = {"social": 0.50,  "alc": 40, "rounded_hobbist": 0.10}





# sample assumpt
assumption1= {"social": pricing["basic"][0], "alc": pricing["basic"][0], "rounded_hobbist":  pricing["basic"][0], "specific_skill":  pricing["basic"][0],  "artsy":  pricing["basic"][0] }

def get_rev(demog, num_of_users, rev_assump, cost_assump):

    rev_dic = {}

    for key, value in demog.items():
        if key == "social":
            subscription_rev = round((num_of_users * demog["social"]) * assump["social"])
            rev_dic[key]= subscription_rev
        elif key == "alc":
            subscription_rev = round((num_of_users * demog["alc"]) * assump["alc"])
            rev_dic[key]= subscription_rev
        elif key == "rounded_hobbist":
            subscription_rev = round((num_of_users * demog["rounded_hobbist"]) * assump["rounded_hobbist"])
            rev_dic[key]= subscription_rev

        elif key == "specific_skill":
            subscription_rev = round((num_of_users * demog["specific_skill"]) * assump["specific_skill"])
            rev_dic[key]= subscription_rev
        elif key == "artsy":
            subscription_rev = round((num_of_users * demog["artsy"]) * assump["artsy"])
            rev_dic[key]= subscription_rev

    return rev_dic

data = get_rev(users_demogr_1, 1000, assumption1)


rev_by_users_df = pd.DataFrame.from_dict(data, orient='index')

total_rev = rev_by_users_df.sum()

rev_by_users_df
